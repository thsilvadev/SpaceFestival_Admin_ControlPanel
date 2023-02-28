const express = require('express')
const router = express.Router()

const productController = require('../controller/product.controller')


router.get("/produtos", productController.getAll)
router.get("/produtos/:id", productController.getById)
router.post("/pedido_ingresso", productController.create)
router.put("/produtos/:id", productController.update)
router.delete("/produtos/:id", productController.delete)

module.exports = router






