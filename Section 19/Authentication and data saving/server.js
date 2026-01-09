import express from 'express';
import dotenv from 'dotenv';
import connetDB from "./config/db.js";
import session from 'express-session';


dotenv.config();

await connetDB();

const app = express();

const port = process.env.PORT || 3000;

//-----middlewares------//
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,// Don't save session if unmodified
    saveUninitialized: false,// Don't create session until something stored
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,// 1 day
    }
}));



//import routes
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import productRoutes from './routes/productRoutes.js';

//routes
app.use(authRoutes);
app.use(cartRoutes);
app.use(productRoutes);

//Error handler middlewares
app.use((error, req, res, next) => {
    console.log('Error:',error.message);
    res.status(500).render('ErrorPage', { pageTitle: error.message });
});


app.listen(port, (error) => {
    if (error) {
        throw error;
    } else {
        console.log(`Server running on port ${port}.....`);
    }
})