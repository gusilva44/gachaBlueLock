const express = require('express')

const { pool } = require('../db')
const { exigirLogin } = require('../auth')

const router = express.Router()

const SELECT_BASE = `
  SELECT c.id_caracters, c.slug, c.name, c.raridade, c.imagem, c.overall,
         p.posicao1, p.posicao2, p.posicao3,
         a.atributo1, a.atributo2, a.atributo3,
         q.ataque, q.tecnica, q.velocidade, q.visao
    FROM tb_caracters c
    JOIN tb_posicoes p   ON p.id_posicoes   = c.id_posicoes
    JOIN tb_atributos a  ON a.id_atributos  = c.id_atributos
    JOIN tb_qualidades q ON q.id_qualidades = c.id_qualidades
`

/** Converte a linha do banco no formato usado pelo site. */
function paraPersonagem(linha) {
  const limpar = (lista) => lista.filter((valor) => valor && valor !== '-')

  return {
    id: linha.slug,
    id_caracters: linha.id_caracters,
    nome: linha.name,
    raridade: linha.raridade,
    imagem: linha.imagem,
    overall: linha.overall,
    posicoes: limpar([linha.posicao1, linha.posicao2, linha.posicao3]),
    qualidades: limpar([linha.atributo1, linha.atributo2, linha.atributo3]),
    atributos: {
      ataque: linha.ataque,
      tecnica: linha.tecnica,
      velocidade: linha.velocidade,
      visao: linha.visao,
    },
  }
}

/* ---------- Todos os personagens (público) ---------- */
router.get('/caracters', async (_req, res) => {
  const [linhas] = await pool.query(`${SELECT_BASE} ORDER BY c.overall DESC`)
  return res.json({ personagens: linhas.map(paraPersonagem) })
})

/* ---------- Elenco do usuário logado ---------- */
router.get('/storage', exigirLogin, async (req, res) => {
  const [linhas] = await pool.query(
    `${SELECT_BASE}
      JOIN tb_storage s ON s.id_caracters = c.id_caracters
     WHERE s.id_user = ?
     ORDER BY s.obtained_at DESC`,
    [req.id_user],
  )
  return res.json({ elenco: linhas.map(paraPersonagem) })
})

/* ---------- Registra um jogador ganhado na roleta ---------- */
router.post('/storage', exigirLogin, async (req, res) => {
  const slug = String(req.body.slug || '').trim()
  if (!slug) return res.status(400).json({ erro: 'Informe o jogador.' })

  const [linhas] = await pool.query(`${SELECT_BASE} WHERE c.slug = ?`, [slug])
  if (linhas.length === 0) return res.status(404).json({ erro: 'Personagem não encontrado.' })

  await pool.query(
    'INSERT IGNORE INTO tb_storage (id_user, id_caracters) VALUES (?, ?)',
    [req.id_user, linhas[0].id_caracters],
  )

  return res.status(201).json({ jogador: paraPersonagem(linhas[0]) })
})

module.exports = router
