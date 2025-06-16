const express = require('express');
const app = express();
const path = require('path')
const rateLimit = require('express-rate-limit');
require('dotenv').config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));//serve CSS/JS files
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 5 }));


//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.post('/',(req, res) => {
    const { email, password } = req.body;
    console.log(`login attempt with: ${email}/${password}`);
    const sampleEmail = process.env.sampleEmail;
    const samplePassword = process.env.samplePassword;
    if (sampleEmail === email && samplePassword === password) {
        res.send('login endpoint hit!');
    } else {
        res.send('login failed');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});