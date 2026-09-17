const express = require('express')
const bcrypt = require('bcryptjs')

const { pool } = require('../db')
const { gerarToken, exigirLogin } = require('../auth')

const router = express.Router()

const publico = (usuario) => ({
  id_user: usuario.id_user,
  name: usuario.name,
  email: usuario.email,
})

/* ---------- CADASTRO ---------- */
router.post('/register', async (req, res) => {
  const name = String(req.body.name || '').trim()
  const email = String(req.body.email || '').trim().toLowerCase()
  const password = String(req.body.password || '')

  if (name.length < 2) return res.status(400).json({ erro: 'Informe seu nome.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ erro: 'E-mail inválido.' })
  if (password.length < 6) return res.status(400).json({ erro: 'A senha precisa ter ao menos 6 caracteres.' })

  const [existentes] = await pool.query('SELECT id_user FROM tb_users WHERE email = ?', [email])
  if (existentes.length > 0) return res.status(409).json({ erro: 'Este e-mail já está cadastrado.' })

  const hash = await bcrypt.hash(password, 10)
  const [resultado] = await pool.query(
    'INSERT INTO tb_users (name, email, password) VALUES (?, ?, ?)',
    [name, email, hash],
  )

  const usuario = { id_user: resultado.insertId, name, email }
  return res.status(201).json({ token: gerarToken(usuario), usuario: publico(usuario) })
})

/* ---------- LOGIN ---------- */
router.post('/login', async (req, res) => {
  const email = String(req.body.email || '').trim().toLowerCase()
  const password = String(req.body.password || '')

  const [linhas] = await pool.query(
    'SELECT id_user, name, email, password FROM tb_users WHERE email = ?',
    [email],
  )
  const usuario = linhas[0]

  if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
    return res.status(401).json({ erro: 'E-mail ou senha incorretos.' })
  }

  return res.json({ token: gerarToken(usuario), usuario: publico(usuario) })
})

/* ---------- USUÁRIO LOGADO ---------- */
router.get('/me', exigirLogin, async (req, res) => {
  const [linhas] = await pool.query(
    'SELECT id_user, name, email FROM tb_users WHERE id_user = ?',
    [req.id_user],
  )
  if (linhas.length === 0) return res.status(401).json({ erro: 'Usuário não encontrado.' })

  return res.json({ usuario: publico(linhas[0]) })
})

module.exports = router
