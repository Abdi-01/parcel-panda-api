const router = require('express').Router()
const { profileController } = require('../controllers')

router.get('/', profileController.getProfile)
router.patch('/update-data', profileController.updateProfile)
router.post('/add-address', profileController.addAddress)
router.patch('/update-address', profileController.updateAddress)
router.post('/update-photo', profileController.updatePhoto)

module.exports = router