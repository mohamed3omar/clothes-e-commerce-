const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://mhmd:123@cluster0.c1ef2ig.mongodb.net/?retryWrites=true&w=majority")
.then( (result) => {
  app.listen(port , ()=>{
    console.log(`you are connected to the db at http://localhost:${port}`);
  }) 
})
.catch( (err) => { console.log(err)})


app.get('/', (req, res) => {
  res.send('Home page')
})

//404
app.use( (req, res) => { 
    res.status(404).send("sorry can't find this page")
  }
)
