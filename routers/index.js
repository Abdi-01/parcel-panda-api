const userRouter = require("./userRouter");
const profileRouter = require('./profileRouter')
const productManageRouter = require('./productManageRouter')
const transactionManageRouter = require('./transactionManageRouter')
const transactionRouter = require("./transactionRouter")
const ongkirRouter = require("./ongkirRouter")
module.exports = {
    userRouter,
    profileRouter,
    productManageRouter,
    transactionManageRouter,
    transactionRouter,
    ongkirRouter
}