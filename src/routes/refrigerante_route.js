const express = require('express')
const router = express.Router()

const refrigerante_controller = require('../controllers/refrigerante_controller')

router.post('/', refrigerante_controller.store)
router.get('/', refrigerante_controller.index)
router.get('/:id', refrigerante_controller.show)
router.put('/:id', refrigerante_controller.update)
router.delete('/', refrigerante_controller.destroy)

module.exports = router