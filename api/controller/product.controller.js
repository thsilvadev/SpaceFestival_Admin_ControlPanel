const pool = require("../database/index") //Conectando com a base de dados
const productController = {

    getAll: async(req, res) => { //async - Sincronizar
        try{ //Repositório
            const [rows, fields] = await pool.query("select * from produtos") //A constante irá receber os dados do repositório 
            res.json({data:rows}) //Alterar para data:rows. Irá imprimir os dados do banco
        } catch (error) {
               console.log(error)
        }
    }, //Conectar os campos do banco e recursos (create, update, delete)
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from produtos where id = ?", [id])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)

        }
    },

create: async (req, res) => {
    try {
        const { titulo, valor, descricao, imagem } = req.body
        
        const sql = "INSERT INTO produtos (titulo, valor, descricao, imagem) VALUES (?, ?, ?, ?)"
        const [rows, fields] = await pool.query(sql, [titulo, valor, descricao, imagem])

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
            const { titulo, valor, descricao, imagem } = req.body
            const { id } = req.params

            const sql = "update produtos set titulo = ?, valor = ?, descricao = ?, imagem = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [titulo, valor, descricao, imagem])

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

            const sql = "delete from produtos where id = ?"
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

module.exports = productController;



