const express = require('express');
const router = express.Router();
const Author = require('../models/author.js');

router.get('/', async (req, res) => {
  let search = req.query.search;

  // ✅ normalize input
  if (typeof search !== 'string') {
    search = '';
  }

  search = search.trim();

  try {
    let authors = [];//

    // ✅ only search when input exists
    if (search.length > 0) {
      authors = await Author.find({
        name: { $regex: search, $options: 'i' }
      });
    }

    res.render('index', { authors, search });

  } catch (error) {
    console.log(error);
    res.render('index', {
      authors: [],
      search,
      errorMessage: 'Error Fetching Authors'
    });
  }
});

    
module.exports = router;