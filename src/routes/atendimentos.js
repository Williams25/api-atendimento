const { router } = require('../middlewares/express')
const atendimento = require('../controllers/atendimentos')

router.get('/', atendimento.index)
router.get('/:id', atendimento.findID)
router.post('/', atendimento.create)
router.put('/', atendimento.update)
router.delete('/:id', atendimento.delete)

module.exports = router