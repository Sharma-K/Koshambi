const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./model/user');

app.use(express.json());
app.use(express.urlencoded());



main().catch(err => console.log(err));

async function main() {
    console.log('database connected');
  await mongoose.connect('mongodb://localhost:27017/Koshambi',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

app.get('/', (req, res)=>{
    res.send('This is the home page');
})

app.listen(5000, ()=>{
    console.log('listening to port 3000');
})