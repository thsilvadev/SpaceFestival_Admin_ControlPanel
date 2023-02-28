const express = require('express')
const router = express.Router()

const purchaseController = require('../controller/purchase.controller')


router.get("/pedido_ingresso", purchaseController.getAll)
router.get("/:id", purchaseController.getById)
router.get("/:id", purchaseController.getCount)
router.post("/pedido_ingresso", purchaseController.create)
router.put("/:id", purchaseController.update)
router.delete("/:id", purchaseController.delete)

module.exports = router






