const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    name:String,
    category:String,
    description:String,
    
})
export default mongoose.model('Product', ProductSchema);