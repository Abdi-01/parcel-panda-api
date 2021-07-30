const { db, dbQuery } = require('../config')

module.exports = {
    getRevenue: async (req, res, next) => {
        try {
            let role = req.user.role 
            if (role === 'admin') {
                let queryRevenue = `SELECT DATE(date_transaction) AS date, SUM(subtotal_parcel - subtotal_product) as val FROM transaction GROUP BY DATE(date_transaction) ORDER BY date`
                let queryTotalRevenue = `SELECT SUM(subtotal_parcel - subtotal_product) as total_revenue FROM transaction`
                let queryCurrentMonthRevenue = `SELECT SUM(subtotal_parcel - subtotal_product) as revenue FROM transaction WHERE MONTH(date_transaction)=MONTH(curdate())`
                let queryCurrentDateRevenue = `SELECT SUM(subtotal_parcel - subtotal_product) as revenue FROM transaction WHERE DATE(date_transaction)=curdate()`
                let queryFilteredRevenue = `SELECT SUM(subtotal_parcel - subtotal_product) as revenue FROM transaction WHERE date_transaction BETWEEN ${db.escape(req.query.from)} AND ${db.escape(req.query.to)}`
                // console.log(queryFilteredRevenue)
                let total = await dbQuery(queryTotalRevenue)
                let month = await dbQuery(queryCurrentMonthRevenue)
                let day = await dbQuery(queryCurrentDateRevenue)
                let filtered = await dbQuery(queryFilteredRevenue)
                let data = await dbQuery(queryRevenue)
                res.status(200).send({total: total[0].total_revenue, month: month[0].revenue, day: day[0].revenue, filtered: filtered[0].revenue, data: data})
            } else {
                res.status(400).send({message: "Must be admin"})
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    getTotalItem: async (req, res, next) => {
        try {
            let role = req.user.role 
            if (role === 'admin') {
                let querySalesItem = `SELECT DATE(date_transaction) AS date, SUM(transaction_detail.amount) as val FROM transaction JOIN transaction_detail ON transaction.id = transaction_detail.idtransaksi GROUP BY DATE(date_transaction) ORDER BY date`
                let queryTotalItem = `SELECT SUM(transaction_detail.amount) as total_product FROM transaction_detail`
                let queryCurrentMonthItem = `SELECT SUM(transaction_detail.amount) as total_product FROM transaction JOIN transaction_detail ON transaction.id = transaction_detail.idtransaksi WHERE MONTH(date_transaction)=MONTH(curdate())`
                let queryCurrentDateItem = `SELECT SUM(transaction_detail.amount) as total_product FROM transaction JOIN transaction_detail ON transaction.id = transaction_detail.idtransaksi WHERE DATE(date_transaction)=curdate()`
                let queryFilteredITem = `SELECT SUM(transaction_detail.amount) as total_product FROM transaction JOIN transaction_detail ON transaction.id = transaction_detail.idtransaksi WHERE date_transaction BETWEEN ${db.escape(req.query.from)} AND ${db.escape(req.query.to)}`
                let data = await dbQuery(querySalesItem)
                let total = await dbQuery(queryTotalItem)
                let month = await dbQuery(queryCurrentMonthItem)
                let day = await dbQuery(queryCurrentDateItem)
                let filtered = await dbQuery(queryFilteredITem)
                res.status(200).send({total: total[0].total_product, month: month[0].total_product, day: day[0].total_product, filtered: filtered[0].total_product, data: data})
            } else {
                res.status(400).send({message: "Must be admin"})
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    },
}