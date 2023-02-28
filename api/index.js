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

app.get("/produtos/:id", productRouter)
app.get("/produtos", productRouter)
app.put("/produtos/:id", productRouter)


app.get("/ingresso", ticketRouter)
app.get("/ingresso/:id", ticketRouter)
app.post("/ingresso", ticketRouter)
app.put("/ingresso/:id", ticketRouter)


app.get("/pedido_ingresso", purchaseRouter)
app.post("/pedido_ingresso", purchaseRouter)

const PORT = process.env.PORT || 8800

app.listen (PORT, () => {
    console.log("Rodando Servidor")
})