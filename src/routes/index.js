const { Router } = require('express')
const router = Router()

const atendimento = require('./atendimentos')
const pet = require('./pet')

router.use('/atendimentos', atendimento)
router.use('/pets', pet)

module.exports = router