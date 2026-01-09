const express = require('express');
const router = require('./routes/route.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];
let nextId = 0;


const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.use('/user', router);

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: ++nextId,
        name,
        email
    }
    users.push(newUser)
    console.log(users);
    res.json({
        message:`User ${name} with ${email} created successfully`
    })
});

app.put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const findUser = users.find(user => user.id === id);
    if(!findUser) {
        return res.status(404).json({
            message:`User with id ${id} not found`
        })
    }

    findUser.name = name;
    findUser.email = email;
    console.log(users);

    
res.json({
        message:`User with id ${id} updated name to ${name} and emails ${email} successfully`
})
    
})

app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const findUser = users.find(user => user.id === id);
    console.log(findUser);
    if(!findUser) {
        return res.status(404).json({
            message:`User with id ${id} not found`
        })
    }
    const index = users.indexOf(findUser);
    users.splice(index, 1);
    console.log(users);
    res.json({
        message:`User with id ${id} deleted successfully`
    })
})

app.get('/things/:name/:id', (req, res) => {
    const { name, id } = req.params;
    if(id.length>4) {
        return res.status(400).json({
            message:`Id should be less than 4`
        })
    }
    res.json({
        id,
        name
    })
})





app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server is running on http://localhost:${PORT}`);
});