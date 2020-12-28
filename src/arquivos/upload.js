const multer = require('multer')
const path = require('path')

module.exports = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {

      const filename = `${Date.now()}--${file.originalname}`

      callback(null, filename)
    }
  })
}
