const router = require('express').Router()
const { financialReportController } = require('../controllers')
const { readToken } = require('../config')

router.get('/revenue', readToken, financialReportController.getRevenue)

module.exports = router