const multer = require("multer");
const path = require("path");
const uploadPath = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});

function fileFilter(req, file, cb) {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let limits = {
    fileSize: 1024 * 1024 * 5,
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits,
});

module.exports = upload;