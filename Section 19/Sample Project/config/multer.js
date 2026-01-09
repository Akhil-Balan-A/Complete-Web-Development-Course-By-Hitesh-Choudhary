const multer = require('multer');
const path = require('path');

//configure multer for diskstorage.

const authorImageStorage = multer.diskStorage({
    destination: 'public/uploads',
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const uniqueSuffice = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffice + fileExt);
    }
});

const bookImageStorage = multer.diskStorage({
    destination: 'public/uploads',
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const uniqueSuffice = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffice + fileExt);
    }
});


module.exports = {
    authorImageStorage,
    bookImageStorage
}


