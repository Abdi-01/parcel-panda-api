const router = require('express').Router()
const { productManageController } = require('../controllers')
const { readToken } = require('../config')

router.get('/', productManageController.getProduct)
router.get('/read/:limit/:offset', readToken, productManageController.getManageProduct)
router.get('/get-parcel', productManageController.getParcel)
router.get('/getParcel-type', productManageController.getParcelType)
router.get('/filter-product', productManageController.filterProductCategory)
router.get('/product-detail', productManageController.getProductDetail)

module.exports = router