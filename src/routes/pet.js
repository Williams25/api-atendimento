const { Router } = require('express')
const router = Router()
const multer = require('multer')
const uploadConfig = require('../arquivos/upload')
const pet = require('../controllers/pet')

const upload = multer(uploadConfig)

router.get('/', pet.index)
router.post('/', upload.array('imagem'), pet.create)

module.exports = router