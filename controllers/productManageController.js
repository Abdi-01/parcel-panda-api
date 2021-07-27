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

    filterProductCategory: async (req, res, next) => {
        try {
            let dataSearch = [], getSQL
            for (let prop in req.query) {
                dataSearch.push(`${db.escape(req.query[prop])}`)
            }
            console.log(dataSearch.join(' AND '))
            if (dataSearch.length > 0) {
                getSQL = `Select p.*, c.title as category from product p join category c on p.idcategory = c.id where idcategory in (${dataSearch.join(' , ')});`
            } else {
                getSQL = `Select  p.*, c.title as category from product p join category c on p.idcategory = c.id;`
            }
            let get = await dbQuery(getSQL)
            res.status(200).send(get)
        } catch (error) {
            next(error)
        }
    },

    getParcel: async (req, res, next) => {
        try {
            let get = `Select * from parcel_type`
            let getParcelCategory = `Select * from parcel_type_category_qty`
            get = await dbQuery(get)
            getParcelCategory = await dbQuery(getParcelCategory)
            get.forEach(item => {
                item.detail = []
                item.category = []
                getParcelCategory.forEach(el => {
                    if (item.id === el.idparcel_type) {
                        item.detail.push(el)
                        item.category.push(`idcategory=${el.idcategory}`)
                    }
                })
            })
            res.status(200).send(get)
        } catch (error) {
            next(error)
        }
    },

    getParcelType: async (req, res, next) => {
        try {
            let getSQL, dataSearch = []
            for (let prop in req.query) {
                dataSearch.push(`${db.escape(req.query[prop])}`)
            }
            console.log(dataSearch.join(' AND '))
            if (dataSearch.length > 0) {
                getSQL = `Select pt.*, p.price from parcel_type_category_qty pt join parcel_type p on p.id = pt.idparcel_type where idparcel_type in (${dataSearch});`
            } else {
                getSQL = `Select pt.*, p.price from parcel_type_category_qty pt join parcel_type p on p.id = pt.idparcel_type;`
            }
            let get = await dbQuery(getSQL)
            res.status(200).send(get)
        } catch (error) {
            next(error)
        }
    },

    getProductDetail: async (req, res, next) => {
        try {
            let dataSearch = [], getSQL
            for (let prop in req.query) {
                dataSearch.push(`${prop} = ${db.escape(req.query[prop])}`)
            }
            console.log(dataSearch.join(' AND '))
            if (dataSearch.length > 0) {
                getSQL = `Select p.*, c.title as category from product p join category c on p.idcategory = c.id where ${dataSearch.join(' AND ')};`
            } else {
                getSQL = `Select  p.*, c.title as category from product p join category c on p.idcategory = c.id;`
            }
            let get = await dbQuery(getSQL)
            res.status(200).send(get)
        } catch (error) {
            next(error)
        }
    }
    
}