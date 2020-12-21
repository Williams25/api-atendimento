const { Router } = require('express')
const routes = Router()
const atendimento = require('../controllers/atendimentos')

routes.get('/', atendimento.index)
routes.post('/', atendimento.create)

module.exports = routes