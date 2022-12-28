import UserSchema  from './models/UserSchema';
import ProductSchema from './models/ProductSchema';

const User = new mongoose.model("user" ,UserSchema);
const Product = new mongoose.model("product" , ProductSchema);

const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const port = 7000
// cors and body-parser middleware
app.use(cors());
app.use(bodyParser.json());

//connect to mongoBD
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://mhmd:123@cluster0.c1ef2ig.mongodb.net/?retryWrites=true&w=majority")
.then( (result) => {
  app.listen(port , ()=>{
    console.log(`you are connected to the db at http://localhost:${port}`);
  }) 
})
.catch( (err) => { console.log(err)})


//upload Images

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, '../project-front/public/images/');
  },
  filename: function(req, file, cb) {   
      cb(null, req.body.name + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({storage, fileFilter});

const storage2 = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, '../Frontend/clothes-ecommerce/public/blabalbal');
  },
  filename: function(req, file, cb) {   
      cb(null, req.body.name + path.extname(file.originalname));
  }
});

const fileFilter2 = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload2 = multer({storage: storage2, fileFilter: fileFilter2});

// read data

app.get("/getUsers", (req, res) => {
  User.find({}, (err, user) => {
      if(err) console.warn(err)
      res.json(user)
  })
})

app.get("/getProducts", (req, res) => {
  Product.find({}, (err, products) => {
      if(err) console.warn(err)
      res.json(products)
  })
})


//login
app.post("/login", (req, res) => {
  const {emailLogin, passwordLogin} = req.body
  User.findOne({email: emailLogin}, (err, user) => {
      if(user){
          if(passwordLogin === user.password){
                  res.send({message: "Login Successfully", user: user})
          }else{
              res.send({message: "Password didn't match"})
          }
        }else{
          res.send({message: "User not registered"})
      }
  })
})

//register
app.post("/register", (req, res) => {
  const {first_name, last_name, email, password} = req.body
  User.findOne({email: email}, (err, user) => {
      if(user){
          res.send({message: "User already registered"})
      }else{
          const user = new User({
              first_name,
              last_name,
              email,
              password,
          })
          user.save(err => {
              if(err){
                  res.send(err)
              }else{
                  res.send({message: "Successfully Registered, please login now!"})
              }
          })
      }
  })
})

//add ,delete , update

//add 
app.post("/addProduct", upload.single('photo'), (req, res) => {
  const {name, category, description} = req.body
  const photo = req.file.filename
  Product.findOne({name: name}, (err, product) => {
      if(product){
          res.send({message: "product already existing"})
      }else{
          const product = new Product({
             name,
             category,
             description,
             photo
          })
          product.save(err => {
              if(err){
                  res.send(err)
              }else{
                  res.send({message: "Successfully Add Product"})
              }
          })
      }
  })
})
//delete
app.delete("/deleteProduct/:id", (req, res) => {
  const id = req.params.id

  Product.findByIdAndDelete({_id: id}, (req,res,err) => {
      if(!err){
          console.log("Product Delete")
      }else{
          console.log(err)
      }
  })
})

//update
app.put("/updateProduct/:id", (req, res) => {
  Product.findByIdAndUpdate({_id: req.params.id}, req.body, function (err, product) {
      if (err) return next(err);
      res.json(product);
  });
})
//404
app.use( (req, res) => { 
    res.status(404).send("sorry can't find this page")
  }
)