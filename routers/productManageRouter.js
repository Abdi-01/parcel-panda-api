const router = require('express').Router()
const { productManageController } = require('../controllers')
const { readToken } = require('../config')

router.get('/read/:limit/:offset', readToken, productManageController.getManageProduct)
router.delete('/delete/:id', readToken, productManageController.deleteProduct)
router.get('/get-parcel', productManageController.getParcel)
router.get('/getParcel-type', productManageController.getParcelType)
router.patch('/edit-product', readToken, productManageController.editManageProduct)
router.get('/filter-product', productManageController.filterProductCategory)
router.get('/product-detail', productManageController.getProductDetail)
router.patch('/manage-stock/:id', productManageController.manageStock)
router.get('/', productManageController.getProduct)

module.exports = router