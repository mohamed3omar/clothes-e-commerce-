const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    Fname: String,
    Lname : String,
    Email: String,
})

export default mongoose.model('Customer' , CustomerSchema);