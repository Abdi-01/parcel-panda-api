const router = require('express').Router()
const { productManageController } = require('../controllers')
const { readToken } = require('../config')

router.get('/', productManageController.getProduct)
router.get('/read/:limit/:offset', readToken, productManageController.getManageProduct)

module.exports = router