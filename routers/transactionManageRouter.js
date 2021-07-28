const router = require('express').Router()
const { transactionManageController } = require('../controllers')
const { readToken } = require('../config')

router.get('/:limit/:offset', readToken, transactionManageController.getTransaction)
router.get('/filter', readToken, transactionManageController.getFilterSubject)

module.exports = router