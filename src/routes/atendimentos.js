const { router } = require('../middlewares/express')
const atendimento = require('../controllers/atendimentos')

router.get('/', atendimento.index)
router.post('/', atendimento.create)

module.exports = router