const { db, dbQuery } = require('../config')

module.exports = {
    getRevenue: async (req, res, next) => {
        try {
            let role = req.user.role 
            if (role === 'admin') {
                let queryRevenue = `SELECT DATE(date_transaction) AS date, SUM(subtotal_parcel - subtotal_product) as revenue FROM transaction GROUP BY DATE(date_transaction) ORDER BY date`
                let queryTotalRevenue = `SELECT SUM(subtotal_parcel - subtotal_product) as total_revenue FROM transaction`
                let queryCurrentMonthRevenue = `SELECT SUM(subtotal_parcel - subtotal_product) as revenue FROM transaction WHERE MONTH(date_transaction)=MONTH(curdate())`
                let queryCurrentDayRevenue = `SELECT SUM(subtotal_parcel - subtotal_product) as revenue FROM transaction WHERE DATE(date_transaction)=curdate()`
                let queryFilteredRevenue = `SELECT SUM(subtotal_parcel - subtotal_product) as revenue FROM transaction WHERE ${db.escape(req.query.from)} AND ${db.escape(req.query.to)}`
                let total = await dbQuery(queryTotalRevenue)
                let month = await dbQuery(queryCurrentMonthRevenue)
                let day = await dbQuery(queryCurrentDayRevenue)
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
    }
}