const { dbQuery } = require('../config/database')

module.exports = {
    addCart: async (req, res, next) => {
        try {
           let addCart = `Insert into cart (iduser, idparcel_type, subtotal) values (${req.user.id}, ${req.body.idparcel_type},${req.body.subtotal});`
           addCart = await dbQuery(addCart)
           let get = `Select * from cart where idcart = ${addCart.insertId}`
           get = await dbQuery(get)
           res.status(200).send(get)
        } catch (error) {
            next(error)
        }
    },
    addToParcel: async (req, res, next) => {
        try {
            let addParcel = `Insert into parcel_detail (idcart, iduser, idproduct, idcategory, amount, subtotal)
            values (${req.body.idcart}, ${req.user.id}, ${req.body.idproduct}, ${req.body.idcategory}, ${req.body.amount}, ${req.body.subtotal});`
            addParcel= await dbQuery(addParcel)
            // let update = `Update cart set idparcel_detail = ${addParcel.insertId}`
            // update = await dbQuery(update)
            res.status(200).send({message: `Success!`})
        } catch (error) {
            next(error)
        }
    },
    getCart: async (req, res, next) => {
        try {
            let getCart= `Select * from cart where iduser = ${req.user.id}`
            let getDetail = `Select pd.*, p.name, p.price, c.title, p.url from parcel_detail pd join product p on p.id = pd.idproduct join category c on c.id = pd.idcategory;`
            getCart= await dbQuery(getCart)
            getDetail = await dbQuery(getDetail)
            getCart.forEach(item => {
                item.detail = []
                getDetail.forEach(el => {
                    if(item.idcart === el.idcart){
                        item.detail.push(el)
                    }
                })
            })
            res.status(200).send(getCart)
        } catch (error) {
            next(error)
        }
    }
}