const express = require('express')
const router = express.Router()


const ticketController = require('../controller/ticket.controller')

router.get("/ingresso", ticketController.getAll)
router.get("/ingresso/:id", ticketController.getById)


router.post("/postingresso", ticketController.create)


module.exports = router






