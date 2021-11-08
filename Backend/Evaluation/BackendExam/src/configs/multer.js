const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'../uploads'));
    },
    filename: function (req, file, cb) {
        const preSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, preSuffix + "-" + file.originalname);
    },
});
function fileFilter(req, file, cb) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024*5
    },
    fileFilter: fileFilter
})


module.exports = upload;
