const express = require('express')
const cep_endereco = require("../middlewares/cep_endereco.js")
const router = express.Router()

const aeroporto_controller = require('../controllers/aeroporto_controller.js')

router.get('/', aeroporto_controller.index)
router.get('/:id', aeroporto_controller.show)
router.post('/', cep_endereco, aeroporto_controller.store)
router.put('/:id', cep_endereco, aeroporto_controller.update)
router.delete('/:id', aeroporto_controller.destroy)

module.exports = router