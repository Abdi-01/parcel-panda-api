const { dbQuery } = require('../config')

module.exports = {
    getTransaction: async (req, res, next) => {
        try {
            let role = req.user.role 
            if (role === 'admin') {
                let queryReadTransaction = `SELECT * FROM transaction`
                let dataTransaction = await dbQuery(queryReadTransaction)
                res.status(200).send(dataTransaction)
            } else {
                res.status(400).send({message: "Must be admin"})
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}