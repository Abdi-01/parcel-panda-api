const multer = require('multer')
const fs = require('fs')

module.exports = {
    uploader: (directory, fileNamePrefix) => {
        // Default directory
        console.log("Go to uploader function")
        let defaultDir = './public'

        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const pathDir = directory ? defaultDir + directory : defaultDir

                console.log("go to destination function")

                if (fs.existsSync(pathDir)) {
                    console.log('Directory exist')
                    cb(null, pathDir)
                } else {
                    fs.mkdir(pathDir, { recursive: true }, error => cb(error, pathDir))
                    console.log('Directory Created')
                }
            },

            filename: (req, file, cb) => {
                console.log("Go to filename function")
                let ext = file.originalname.split('.')
                let filename = fileNamePrefix + Date.now() + '.' + ext[ext.length - 1]
                cb(null, filename)
            }
        })

        const fileFilter = (req, file, cb) => {
            console.log("go to filter function")
            const ext = /\.(jpg|jpeg|png|pdf|docx|gif|xlsx|txt)/
            if (!file.originalname.match(ext)) {
                return cb(new Error('Your file type are denied'), false)
            }
            cb(null, true)
        }

        return multer({ storage, fileFilter })
    }
}