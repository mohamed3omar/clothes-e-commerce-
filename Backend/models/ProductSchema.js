const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    name:String,
    category:String,
    description:String,
    created_at:{ type: Date },
    updated_at:{ type: Date, default: Date.now },
    updated:{type: Date, default: Date.now}
})
export default mongoose.model('Product', ProductSchema);