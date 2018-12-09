const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    var _fileType = file.mimetype.split('/')[1]
    cb(null, file.fieldname + '-' + Date.now() + '.' + _fileType)
  }
})

var limits = {
  fileSize: 2097152
}

function fileFilter (req, file, cb) {
  // 接受文件
  cb(null, true)

  // 拒绝接受
  // cb(null, false)
}

var upload = multer({ storage: storage, fileFilter: fileFilter, limits: limits }).single('file')

module.exports = function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        // multer错误
        res.json({
            code: 2,
            msg: err
        })
    } else if (err) {
        // 其他错误
        res.json({
            code: 1,
            msg: '上传失败，稍后再试！'
        })
    } else {
      // Everything went fine.
      res.json({
        code: 0
      })
    }
  })
}