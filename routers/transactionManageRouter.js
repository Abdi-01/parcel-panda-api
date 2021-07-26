const router = require('express').Router()
const { transactionManageController } = require('../controllers')
const { readToken } = require('../config')

router.get('/', readToken, transactionManageController.getTransaction)

module.exports = router