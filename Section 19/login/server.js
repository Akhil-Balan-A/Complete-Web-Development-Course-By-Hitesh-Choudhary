const express = require("express");
const app = express();
require("dotenv").config();
const bcrypt = require("bcrypt");

app.use(express.json());
const users = [];

app.get("/users", (req, res) => {
  res.status(200);
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
   
    const newUser = { name: req.body.name, password:hashedPassword };
    users.push(newUser);
    res.status(201).send("User Created");
  } catch (error) {
      res.status(500).json('error while saving password');
  }
});

app.post('/users/login', async(req, res) => {
    const user = users.find(user => user.name === req.body.name);
    if (user==null) {
       return res.status(400).send("Cannot find user");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("You are logged in");
        } else {
            res.send("Incorrect Password");
        }
        
    } catch (error) {
        res.status(500).json('error while saving password');
    }
})

const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
