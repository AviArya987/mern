const express=require('express');
const app = express();
const dotenv=require('dotenv')
app.use(express.json());
const mongoose =require('mongoose');
dotenv.config({path:'./config.env'});

require('./db/conn')
app.use(require('./router/auth.js'));


app.get('/',(req,res)=>{
  res.send('hello from the server');
})

app.listen(8000, ()=>{
  console.log('app is up at port 8000');
})