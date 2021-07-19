const database = require('./database')
const uploader = require('./uploader')

module.exports = {
    ...database, ...uploader
}