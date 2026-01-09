const express = require('express');

const app = express();



app.get('/', (req, res,next) => {
    console.log("Home Page");
    res.send("Home Page");
    next();
});

app.get('/user',auth, (req, res,next) => {
    console.log("Users Page");
    res.send('Users Page with admin status: ' + req.admin);
    return next();
    console.log("User Page message 2");
    

});


app.use(logger);

function logger(req,res,next) {
    console.log("user logged");
    // next();
};

function auth(req, res, next) {
    if(req.query.admin !== 'true') {
        return res.status(401).send("Unauthorized");
    } else {
        req.admin = true;
    }
    console.log("user authenticated");
    next();
}



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});