const router = require('express').Router()
const { productManageController } = require('../controllers')
const { readToken } = require('../config')

router.get('/read/:limit/:offset', readToken, productManageController.getManageProduct)
router.delete('/delete/:id', readToken, productManageController.deleteProduct)
router.patch('/edit-product', readToken, productManageController.editManageProduct)
router.post('/add-product', readToken, productManageController.addProduct)
router.get('/get-parcel', productManageController.getParcel)
router.get('/getParcel-type', productManageController.getParcelType)

module.exports = router