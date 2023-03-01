const express = require("express");
const app = express();
const cors = require("cors")


require('dotenv').config()

const purchaseRouter = require('./routes/purchase.router')
const ticketRouter = require('./routes/ticket.router') //Inserir a constante
const productRouter = require('./routes/product.router')

app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.json())

app.use(purchaseRouter)
app.use(ticketRouter)
app.use(productRouter)


const PORT = process.env.PORT || 8800

app.listen (PORT, () => {
    console.log("Rodando Servidor")
})