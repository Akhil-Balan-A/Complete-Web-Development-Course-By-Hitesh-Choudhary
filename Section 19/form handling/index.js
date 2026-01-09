import express from 'express';
import multer from 'multer';
import storage from './config/multer.js';


const app = express();
const port = 3000;

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB
    }
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { message:"This is home page" });

});

app.post('/user',upload.single('userImage'), (req, res) => {
    console.log(req.body)
    const { userName, userEmail } = req.body;
    const imagePath = req.file?`/images/${req.file.filename}`:"";
    res.render('message',{userName,userEmail,imagePath});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

