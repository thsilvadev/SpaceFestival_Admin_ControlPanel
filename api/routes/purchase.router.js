const express = require('express')
const router = express.Router()

const purchaseController = require('../controller/purchase.controller')


router.get("/pedido_ingresso", purchaseController.getAll)
router.get("/pedido_ingresso/:id", purchaseController.getById)
//router.get("/:id", purchaseController.getCount)
router.post("/postpedido_ingresso", purchaseController.create)
router.put("/postpedido_ingresso/:id", purchaseController.update)
router.delete("/deletepedido_ingresso/:id", purchaseController.delete)

module.exports = router






