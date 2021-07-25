// password 2FA Gmail : ttkykvkhkxdbufee

const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'adm.parcelpanda@gmail.com',
        pass: 'ttkykvkhkxdbufee',
        // pass: 'parcelpanda123',
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = {transporter}