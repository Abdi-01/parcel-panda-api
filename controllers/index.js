const userController = require("./userController");
const profileController = require('./profileController')
const productManageController = require('./productManageController')
const transactionManageController = require('./transactionManageController')
const transactionController = require("./transactionController")
const ongkirController = require("./ongkirController")

module.exports = {
    userController,
    profileController,
    productManageController,
    transactionManageController,
    transactionController,
    ongkirController
}