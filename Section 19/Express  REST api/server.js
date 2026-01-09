const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());//middleware to parse json

const subscribersRouter = require('./routes/subscribers');

app.use('/subscribers',subscribersRouter);


app.get('/',(req,res)=>{
    res.writeHead(200, { 'Conent-Type': 'text/plain' });
    res.write("Home Page");
    res.end();
});


const port = process.env.PORT || 3000;

app.listen(port,(error)=>{
    if(error) throw error;
    console.log(`server is running on port ${port}`);
});
