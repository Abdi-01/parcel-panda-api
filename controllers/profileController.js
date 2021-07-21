const { db, dbQuery, uploader } = require('../config')
const fs = require('fs')

module.exports = {
    getProfile: async (req, res, next) => {
        try {
            console.log("Read Profile")
            // let auth = req.user.id
            let auth = 2
            if (auth) {
                let queryReadProfile = `SELECT id, username, fullname, gender, email, age, role FROM user WHERE user.id = ${auth}`
                let queryReadAddress = `SELECT label, recipient_name, phone_number, city, postal_code, address FROM address where iduser = ${auth}`
                let dataProfile = await dbQuery(queryReadProfile)
                let dataAddress = await dbQuery(queryReadAddress)
                dataProfile[0].address = dataAddress
                // console.log(dataProfile[0])
                res.status(200).send(dataProfile)
            } else {
                res.status(400).send('Must login!')
            }
        } catch (error) {
            next(error)
        }
    },

    updateProfile: async (req, res, next) => {
        try {
            console.log("Update Profile")
            // let auth = req.user.id
            let auth = 2
            if (auth) {
                let value = []
                for (property in req.body) {
                    value.push(`${property} = ${db.escape(req.body[property])}`)
                }
                let queryUpdateProfile = `UPDATE user SET ${value.join(', ')} WHERE id = ${auth}`
                let response = await dbQuery(queryUpdateProfile)
                if (response.affectedRows > 0) {
                    res.status(200).send({message: "Profile has been updated"})
                } else {
                    res.status(400).send({error: "Update profile failed"})
                }
            } else {
                res.status(400).send('Must login!')
            }
        } catch (error) {
            next(error)
        }
    }, 

    addAddress: async (req, res, next) => {
        try {
            console.log("Add Address")
            // let auth = req.user.id
            let auth = 2
            if (auth) {
                let queryInsertAddress = `INSERT INTO address (iduser, label, recipient_name, phone_number, city, postal_code, address) VALUES (${db.escape(req.body.iduser)}, ${db.escape(req.body.label)}, ${db.escape(req.body.recipient_name)}, ${db.escape(req.body.phone_number)}, ${db.escape(req.body.city)}, ${db.escape(req.body.postal_code)}, ${db.escape(req.body.address)})`
                let response = await dbQuery(queryInsertAddress)
                if (response.affectedRows > 0) {
                    res.status(200).send({message: "Address has been added"})
                } else {
                    res.status(400).send({error: "Adding address failed"})
                }
            } else {
                res.status(400).send('Must login!')
            }
        } catch (error) {
            next(error)
        }
    },

    updateAddress: async (req, res, next) => {
        try {
            console.log("Update Address")
            // let auth = req.user.id
            let auth = 2
            if (auth) {
                let value = []
                for (property in req.body) {
                    value.push(`${property} = ${db.escape(req.body[property])}`)
                }
                let queryUpdateAddress = `UPDATE address SET ${value.join(', ')} WHERE id = ${req.body.id}`
                let response = await dbQuery(queryUpdateAddress)
                if (response.affectedRows > 0) {
                    res.status(200).send({message: "Address has been updated"})
                } else {
                    res.status(400).send({error: "Update address failed"})
                }
            } else {
                res.status(400).send('Must login!')
            }
        } catch (error) {
            next(error)
        }
    },

    updatePhoto: async (req, res, next) => {
        console.log("Check first req", req.files)
        const upload = uploader('/images', 'IMG').fields([{ name: 'images' }])
        upload (req, res, async (error) => {
            try {
                const { images } = req.files
                console.log("cek file upload :", images, req.files.images[0])
            } catch (error) {
                // delete image when upload process error
                fs.unlinkSync(`./public/images/${req.files.images[0].filename}`)
                // error catch from query
                console.log(error)
                // error from upload function
                next(err)
            }
        })
    },
}