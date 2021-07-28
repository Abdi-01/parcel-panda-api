const { db, dbQuery } = require('../config')

module.exports = {
    getTransaction: async (req, res, next) => {
        try {
            let role = req.user.role 
            // http://localhost:8031/transaction-manage/5/0?payment=ongoing,accepted
            if (role === 'admin') {
                let paymentString = []
                let queryPaymentStatus = ''
                let joinStatus = ''
                if (req.query.payment) {
                    req.query.payment.split(",").forEach(element => {
                        paymentString.push(db.escape(element))
                    });
                    queryPaymentStatus = `payment_status.title IN (${paymentString})`
                }
                if (req.query.payment) {
                    joinStatus = `WHERE ${queryPaymentStatus}`
                }
                // console.log(joinStatus)
                let countRows = `SELECT COUNT(*) as count FROM transaction JOIN payment_status ON transaction.idpayment_status = payment_status.id ${joinStatus}`
                let queryReadTransaction = `SELECT transaction.id, invoice, date_transaction, date_payment, username, payment_status.title as payment_status, amount, subtotal_parcel, idpayment_status, url_payment_image FROM transaction JOIN user ON transaction.iduser = user.id JOIN payment_status ON transaction.idpayment_status = payment_status.id ${joinStatus} LIMIT ${req.params.limit} OFFSET ${req.params.offset}`
                let totalTransaction = await dbQuery(countRows)
                let dataTransaction = await dbQuery(queryReadTransaction)
                res.status(200).send({count: totalTransaction[0].count, values: dataTransaction})
            } else {
                res.status(400).send({message: "Must be admin"})
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    getFilterSubject: async (req, res, next) => {
        try {
            let role = req.user.role 
            if (role === 'admin') {
                let paymentStatusQuery = `SELECT title FROM payment_status`
                let parcelTypeQuery = `SELECT title FROM parcel_type`
                let paymentStatus = await dbQuery(paymentStatusQuery)
                let parcelType = await dbQuery(parcelTypeQuery)
                // console.log(paymentStatus, parcelType)
                res.status(200).send({payment: paymentStatus, parcel: parcelType})
            } else {
                res.status(400).send({message: "Must be admin"})
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}