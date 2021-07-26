const { db, dbQuery, uploader } = require('../config')
const fs = require('fs')

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

    editManageProduct: async (req, res, next) => {
        const upload = uploader('/images', 'IMG').fields([{ name: 'images' }])
        upload(req, res, async (error) => {
            try {
                let role = req.user.role
                let data = JSON.parse(req.body.data)
                // console.log("Data =>", data)
                // console.log("Cek file upload => ", req.files.images[0].filename)
                if (role === 'admin') {
                    let querySelectImage = `SELECT url FROM product WHERE id = ${db.escape(data.id)}`
                    let imgResponse = await dbQuery(querySelectImage)
                    // console.log(imgResponse)
                    if (imgResponse[0].url !== null) {
                        if (imgResponse[0].url.length > 0) {
                            fs.unlinkSync(`./public/images/${imgResponse[0].url}`)
                        }
                    }
                    let queryUpdateProduct = `UPDATE product SET name=${db.escape(data.name)}, idcategory=${db.escape(data.idcategory)}, stock=${db.escape(data.stock)}, price=${db.escape(data.price)}, url=${db.escape(req.files.images[0].filename)} WHERE id=${db.escape(data.id)}`
                    let response = await dbQuery(queryUpdateProduct)
                    if (response.affectedRows > 0) {
                        res.status(200).send({message: "product has been updated"})
                    } else {
                        res.status(400).send({message: "update product failed"})
                    }
                } else {
                    res.status(400).send({message: "Must be admin"})
                }
            } catch (error) {
                fs.unlinkSync(`./public/images/${request.files.images[0].filename}`)
                console.log(error)
                next(error)
            }
        })
    }
}