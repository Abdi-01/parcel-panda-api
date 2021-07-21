const router = require('express').Router()
const { profileController } = require('../controllers')
const { readToken } = require('../config')

router.get('/', readToken, profileController.getProfile)
router.patch('/update-data', readToken, profileController.updateProfile)
router.post('/add-address', readToken, profileController.addAddress)
router.patch('/update-address', readToken, profileController.updateAddress)
router.patch('/update-password', readToken, profileController.updatePassword)
router.post('/update-photo', readToken, profileController.updatePhoto)

module.exports = router