const { dbQuery } = require('../config')

module.exports = {
    getTransaction: async (req, res, next) => {
        try {
            let role = req.user.role 
            if (role === 'admin') {
                let countRows = `SELECT COUNT(*) as count FROM transaction`
                let queryReadTransaction = `SELECT transaction.id, date_transaction, date_payment, username, parcel_type.title as parcel_type, payment_status.title as payment_status, amount, subtotal_parcel, idpayment_status, url_payment_image FROM transaction JOIN user ON transaction.iduser = user.id JOIN parcel_type ON transaction.idparcel_type = parcel_type.id JOIN payment_status ON transaction.idpayment_status = payment_status.id LIMIT ${req.params.limit} OFFSET ${req.params.offset}`
                let totalTransaction = await dbQuery(countRows)
                // console.log(totalTransaction[0].count)
                let dataTransaction = await dbQuery(queryReadTransaction)
                res.status(200).send({count: totalTransaction[0].count, values: dataTransaction})
            } else {
                res.status(400).send({message: "Must be admin"})
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}