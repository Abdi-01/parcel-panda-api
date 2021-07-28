const { dbQuery, db } = require('../config/database')

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
            let addParcel = `Insert into parcel_detail (idcart, iduser, idparcel_type, idproduct, idcategory, amount, subtotal)
            values (${req.body.idcart}, ${req.user.id}, ${req.body.idparcel_type}, ${req.body.idproduct}, ${req.body.idcategory}, ${req.body.amount}, ${req.body.subtotal});`
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
    },

    getCartDetail: async (req, res, next) => {
        try {
            let queryGet = `Select * from parcel_detail where iduser= ${req.user.id};`
            queryGet= await dbQuery(queryGet)
            res.status(200).send(queryGet)
        } catch (error) {
            next(error)
        }
    },

    addTransaction: async (req, res, next) => {
        try {
            // CHECKOUT, ADD TRANSACTION
            let iduser = req.user.id
            let { invoice, idaddress, amount, subtotal_product, subtotal_parcel, ongkir, total_payment, idpayment_status, detail } = req.body
            let addToTrans = `Insert into transaction set ?`
            addToTrans = await dbQuery(addToTrans, { invoice, iduser, amount, idaddress, subtotal_product, subtotal_parcel, ongkir, total_payment, idpayment_status })
            console.log("Checkout Add to transaction Success", addToTrans)

            // ADD TRANSACTION DETAIL
            let addTransDetail = `Insert into transaction_detail (idtransaksi, idparcel_type, idproduct, idcategory, amount) values ?`
            let dataDetail = detail.map(item => [addToTrans.insertId, item.idparcel_type ,item.idproduct, item.idcategory, item.amount])
            addTransDetail = await dbQuery(addTransDetail, [dataDetail])
            console.log("Add detail success", addTransDetail)

            // DELETE CART
            let deleteCart = `Delete from cart where (idcart, iduser) IN (?) ;`
            let deleteCartDetail = `Delete from parcel_detail where (idcart, iduser) IN (?) ;`
            let dataDelete = detail.map(item => [item.idcart, item.iduser])
            deleteCart = await dbQuery(deleteCart, [dataDelete])
            deleteCartDetail = await dbQuery(deleteCartDetail, [dataDelete])
            console.log("Del Success", deleteCart)
            res.status(200).send({ success: true, message: "Checkout Success" })
        } catch (error) {
            next(error)
        }
    }
}