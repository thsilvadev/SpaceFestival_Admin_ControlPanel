const express = require('express')
const router = express.Router()

const productController = require('../controller/product.controller')


router.get("/produtos", productController.getAll)
router.get("/produtos/:id", productController.getById)
router.post("/postprodutos/", productController.create)
router.put("/putprodutos/:id", productController.update)
router.delete("/deleteprodutos/:id", productController.delete)

module.exports = router






