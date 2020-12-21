const express = require('express')
const routes = express()
const atendimento = require('./atendimentos')

routes.use('/atendimentos', atendimento)

module.exports = routes