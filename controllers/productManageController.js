const { db, dbQuery } = require('../config')

module.exports = {
    getProduct: async (req, res, next) => {
        try {
            let queryReadProduct = `SELECT product.id, name, idcategory, category.title as category, idstatus, status.title as status, stock, price, url FROM product JOIN category ON product.idcategory = category.id JOIN status ON product.idstatus = status.id WHERE idstatus = 3`
            let dataProduct = await dbQuery(queryReadProduct)
            res.status(200).send(dataProduct)
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    getManageProduct: async (req, res, next) => {
        try {
            // console.log("getManageProduct", req.user)
            let role = req.user.role
            // console.log(req.query)
            if (role === 'admin') {
                let queryReadProduct = `SELECT product.id, name, idcategory, category.title as category, idstatus, status.title as status, stock, price, url FROM product JOIN category ON product.idcategory = category.id JOIN status ON product.idstatus = status.id WHERE idstatus = 3 ORDER BY ${req.query.column} ${req.query.sort} LIMIT ${req.params.limit} OFFSET ${req.params.offset}`
                let dataProduct = await dbQuery(queryReadProduct)
                res.status(200).send(dataProduct)
            } else {
                res.status(400).send({message: "Must be admin"})
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    deleteProduct: async (req, res, next) => {
        try {
            // console.log("deleteProduct")
            let role = req.user.role 
            if (role === 'admin') {
                let queryUpdateProduct = `UPDATE product SET idstatus = 4 WHERE id = ${req.params.id}`
                let response = await dbQuery(queryUpdateProduct)
                if (response.affectedRows > 0) {
                    res.status(200).send({message: "product has been deleted"})
                } else {
                    res.status(400).send({message: "delete product failed"})
                }
            } else {
                res.status(400).send({message: "Must be admin"})
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    },
}