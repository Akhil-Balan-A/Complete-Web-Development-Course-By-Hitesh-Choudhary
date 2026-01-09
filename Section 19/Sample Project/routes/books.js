const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');
const Author = require('../models/author.js');
const multer = require('multer');
const { bookImageStorage } = require('../config/multer.js');


//multer middleware
const upload = multer({
    storage: bookImageStorage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB
    }
});



// All Books Route
router.get('/', async (req, res) => {
    const books = await Books.find().populate('author');
    res.render('books/books',{books});
});

// get add book page
router.get('/new', async (req, res) => {
    const authors = await Author.find().sort({name:1});
    res.render('books/newBooks', {
        authors,
        book:{}
    });
});

// post add book
router.post('/new', upload.single('coverImage'), async (req, res) => {
    const { title, description, genre, rating, publishDate,author } = req.body
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const book = new Books({
        title,
        description,
        genre,
        rating,
        publishDate,
        author,// objectId string only
        coverImage: imagePath
    });

    try {
        await book.save();
        req.flash('success','Book Created Successfully!');
        res.redirect('/books/new');
            
    } catch (error) {
        console.log(error);
         const authors = await Author.find();

    res.status(500).render('books/newBooks', {
      authors,
      book,
      errorMessage: 'Error creating book'
    });
     
    }
        
});


    


module.exports = router;
