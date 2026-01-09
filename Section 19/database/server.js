import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Person from './models/Person.js';
import methodOverride from 'method-override';
import { set } from 'mongoose';

dotenv.config();
await connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));//extended: true allows nested objects

//method override since html forms dont suppoert methods other than get and post.
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

     // Extract messages from query parameters
    const successMessage = req.query.success || null;
    const errorMessage = req.query.error || null;

    // Render the people view, passing the messages
    res.render('index', { 
        successMsg: successMessage,
        errorMsg: errorMessage
    });
    
});

app.post('/person', async(req, res) => {
    const {  name, age, email } = req.body;
    const newPerson = new Person({
        name,
        age,
        email
    });
    await newPerson.save();
    console.log(newPerson);
    //if new person is created and saved successfully show below message
    if (!newPerson) {
        return res.status(400).redirect('/?error=Person+not+created+successfully!');
  
    } 
    res.redirect('/?success=Person+created+successfully');
    
});
app.get('/people', async (req, res) => {
    const people = await Person.find();
    // Extract messages from query parameters
    const successMessage = req.query.success || null;
    const errorMessage = req.query.error || null;

    // Render the people view, passing the messages
    res.render('people', { 
        people: people,
        successMsg: successMessage,
        errorMsg: errorMessage
    });
    
});
app.get('/update/:id', async(req, res) => {
    const id = req.params.id;
    const person = await Person.findById(id);
    console.log(person);
   res.render('update',{person}); ;
});

app.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const { name, age, email } = req.body;
     
    const people = await Person.findById(id);
    people.name = name;
    people.age = age;
    people.email = email;
    await people.save();
    if (!people) {
        return res.redirect('/people?error=Person+not+found+for+update');
    }
    res.redirect('/people?success=Person+details+updated+successfully!');   
});

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await Person.findByIdAndDelete(id);
    if(!id) {
        return res.redirect('/people?error=Person+not+found+for+delete');
    }
    res.redirect('/people?success=Person+deleted+successfully!');
    
});

app.listen(port, () => {
    console.log(`Server running on port ${port}....`);
});
