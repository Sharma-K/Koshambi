
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const User = require('./model/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const path = require('path');

const session = require('express-session');
const MongoDBStore = require('connect-mongo');
const port = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;
if(process.env.NODE_ENV !== "production")
{
  
   app.use('/',express.static('client/build'));
   app.get('/' , (req , res)=>{

    res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

})
}
const store =  MongoDBStore.create({
  mongoUrl: dbUrl,
  crypto:{
  secret: 'koshambisecret'
  },
  touchAfter: 24*3600
});
store.on('error', function(e){
  console.log('Session store error', e);
})
const sessionConfig = {
  store,
  name: 'session',
  secret: 'koshambisecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      secure: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}

app.use(session(sessionConfig));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); // how do we store the user in the session
passport.deserializeUser(User.deserializeUser()) // how to get user out of the data



main().catch(err => console.log(err));

async function main() {
    console.log('database connected');
  
  await mongoose.connect(dbUrl,{

    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
}

app.get('/database', async(req, res)=>{

  const users = await User.find({});
 
  res.send(users);

})


app.post('/login',passport.authenticate('local'), async(req, res) => {

  try
  {
  
    res.send('successfully loggedin')
    
  }
  catch(err){
   
    res.send('not authorized')
   
  }
})


app.post('/register', async(req, res) => {
 

  console.log('this is inside register api');

  const { email, username, password } = req.body;

  const user = new User({ email, username });


  const registeredUser = await User.register(user, password);
 
  req.login(registeredUser, err =>{
    if(err) {
        console.log('this is the error',err);
        return next(err);
    }
    else
    {
        // req.flash('sucess', 'Welcome ');
    // res.redirect('/');
    res.send('success');
    }
});
 
})


app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})