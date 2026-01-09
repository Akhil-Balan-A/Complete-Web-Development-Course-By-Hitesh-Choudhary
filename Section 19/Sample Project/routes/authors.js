const express = require('express');
const router = express.Router();
const Author = require("../models/author.js");
const multer = require('multer');
const { authorImageStorage} = require('../config/multer.js');
const countries = require('../utils/countries.js');

//multer middleware
const upload = multer({
    storage: authorImageStorage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB
    }
});


// All Authors Route
router.get('/', async(req, res) => {
    try {
        const authors = await Author.find();
        res.render('authors/authors', { authors: authors });
    } catch (error) {
        console.log(error);
        res.render('authors/authors', {
            authors: [],
            errorMessage: "Error Fetching Authors"
        });
    }
    
});


// New Author creation page
router.get('/new', (req, res) => {
    res.render('authors/newAuthor', { author: new Author(),countries:countries});
});

// Create New Author Route
router.post('/new',upload.single('photo'), async(req, res) => {
    const { name,rating, bio, nationality, dob, email } = req.body;
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const author = new Author({
        name,
        rating,
        bio,
        nationality,
        dob,
        email,
        photo: imagePath
    });

    try {
         await author.save();
        req.flash('success','Author Created Successfully!');
        res.redirect('/authors/new');
            
    } catch (error) {
        console.log(error);
        if(error.code === 11000 && error.keyPattern.email){
            return res.status(400).render('authors/newAuthor', {
                author: author,
                errorMessage: "Email already exists. Please use a different email.",
                countries:countries
            })
        }
            res.status(500).render('authors/newAuthor', {
                author: author,
                errorMessage: "Error Creating Author",
                countries:countries

            });
        }
   
});



module.exports = router;