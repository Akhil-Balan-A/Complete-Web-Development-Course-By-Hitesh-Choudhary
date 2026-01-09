const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const flash = require('connect-flash');
dotenv.config();
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.flashError = req.flash('error');
    res.locals.flashSuccess = req.flash('success');
    next();
});

const port = process.env.PORT || 3000 ;
    
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout', 'layouts/layout');

app.use(express.static('public'));
app.use(expressLayouts);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const indexRouter = require('./routes/index.js');
const authorsRouter = require('./routes/authors.js');
const booksRouter = require('./routes/books.js');


app.use('/',indexRouter);
app.use('/authors',authorsRouter);
app.use('/books',booksRouter);

app.use((error, req, res, next)=>{
    //Log the error for debugging purposes (not sent to client)
    console.error(error.stack);
    const statusCode = error.status || 500;
    //Send a generic error response to the client
       res.status(statusCode).json({
        success: false,
        message: statusCode === 500? 'Internal Server Error': error.message || 'An unknown error occured'
    });
})



app.listen(port, () => {
    console.log(`Server is running successfully on port ${port}.`);
}).on('error', (error) => { // Use .on('error') for better error handling
    console.error(`Server failed to start: ${error.message}`);
    process.exit(1); // Exit process on severe error
});
