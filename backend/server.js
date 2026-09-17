require('dotenv').config()

const express = require('express')
const cors = require('cors')

const authRoutes = require('./src/routes/auth.routes')
const caractersRoutes = require('./src/routes/caracters.routes')

const app = express()

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))
app.use(express.json())

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.use('/api/auth', authRoutes)
app.use('/api', caractersRoutes)

// Erros não tratados das rotas assíncronas
app.use((erro, _req, res, _next) => {
  console.error(erro)
  res.status(500).json({ erro: 'Erro interno no servidor.' })
})

const porta = Number(process.env.PORT || 3333)
app.listen(porta, () => console.log(`API Blue Lock rodando em http://localhost:${porta}`))
