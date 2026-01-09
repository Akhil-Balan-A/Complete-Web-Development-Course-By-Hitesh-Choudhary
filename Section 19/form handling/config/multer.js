import multer from 'multer';
import path from 'path';

//configure multer for disk storage.
const storage = multer.diskStorage({
    destination: 'public/images',

    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname)//get file extension
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+`${fileExtension}`)
    }
});

export default storage