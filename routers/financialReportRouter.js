const router = require('express').Router()
const { financialReportController } = require('../controllers')
const { readToken } = require('../config')

router.get('/revenue', readToken, financialReportController.getRevenue)
router.get('/item', readToken, financialReportController.getItemReport)
router.get('/parcel', readToken, financialReportController.getParcelReport)

module.exports = router