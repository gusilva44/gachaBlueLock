const jwt = require('jsonwebtoken')

const SEGREDO = process.env.JWT_SECRET || 'troque-este-segredo'
const EXPIRA_EM = process.env.JWT_EXPIRES_IN || '7d'

function gerarToken(usuario) {
  return jwt.sign({ id_user: usuario.id_user }, SEGREDO, { expiresIn: EXPIRA_EM })
}

/** Middleware: exige o header Authorization: Bearer <token>. */
function exigirLogin(req, res, next) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null

  if (!token) {
    return res.status(401).json({ erro: 'Você precisa estar logado.' })
  }

  try {
    const payload = jwt.verify(token, SEGREDO)
    req.id_user = payload.id_user
    return next()
  } catch {
    return res.status(401).json({ erro: 'Sessão expirada. Faça login novamente.' })
  }
}

module.exports = { gerarToken, exigirLogin }
