const router = require('express').Router()
const { readToken } = require('../config')
const { transactionController } = require('../controllers') 

router.post('/addCart', readToken, transactionController.addCart)
router.post('/addParcel', readToken, transactionController.addToParcel)
router.get('/getcart', readToken, transactionController.getCart)
router.get('/getcart-detail', readToken, transactionController.getCartDetail)
router.post('/checkout', readToken, transactionController.addTransaction)

module.exports = router