import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    title: {type: String,unique:true, required: true},
    img: {type: String },
    description: {type: String,required:true},
    quantity: {type: Number,required:true },
    price: {type: Number, required: true},
    seller_id: {type: Number, required: true},
    rating: {type: Number},
    colors: {type: Array},
    department: {type: String,enum:["men","woman","kids"] ,required: true},
countInStack:{type:Number,
    required:true,
    min:0,
    max:255

},


});




const Products = mongoose.model('products', productSchema);


export {Products};