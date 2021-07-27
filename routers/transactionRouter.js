const router = require('express').Router()
const { readToken } = require('../config')
const { transactionController } = require('../controllers') 

router.post('/addCart', readToken, transactionController.addCart)
router.post('/addParcel', readToken, transactionController.addToParcel)
router.get('/getcart', readToken, transactionController.getCart)

module.exports = router