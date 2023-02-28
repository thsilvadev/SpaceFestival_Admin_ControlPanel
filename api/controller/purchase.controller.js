const pool = require("../database/index") //Conectando com a base de dados
const purchaseController = {

    getAll: async(req, res) => { //async - Sincronizar
        try{ //Repositório
            const [rows, fields] = await pool.query("select * from pedido_ingresso") //A constante irá receber os dados do repositório 
            res.json({data:rows}) //Alterar para data:rows. Irá imprimir os dados do banco
        } catch (error) {
               console.log(error)
        }
    }, //Conectar os campos do banco e recursos (create, update, delete)
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from ingresso where id = ?", [id])

            res.json({
                data: rows
            })

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)

        }
    },
    getCount: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from ingresso where id = ?", [id])

            res.json({
                data: rows
            })

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)

        }
    },

create: async (req, res) => {
    try {
        const { nome_usuario, cpf_usuario, email, id_pedido } = req.body
        
        const sql = "INSERT INTO pedido_ingresso (nome_usuario, cpf_usuario, email, id_pedido) VALUES (?, ?, ?, ?)"
        const [rows, fields] = await pool.query(sql, [nome_usuario, cpf_usuario, email, id_pedido])

        res.json({
            data: rows
        })

    } catch (error) {
        console.log(error)
        res.json({
            status: "error"
        })

    }
},

    update: async (req, res) => {
        try {
            const { nome_usuario, cpf_usuario, email, id_pedido } = req.body
            const { id } = req.params

            const sql = "update pedido_ingresso set nome_usuario = ?, cpf_usuario = ?, email = ?, id_pedido = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [nome_usuario, cpf_usuario, email, id_pedido, id])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })

        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params

            const sql = "delete from pedido_ingresso where id = ?"
            const [rows, fields] = await pool.query(sql, [id])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })

        }
    }

}

module.exports = purchaseController;



