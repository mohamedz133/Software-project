import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    seller_id: {type: Number, required: true},
    rating: {type: Number},
    colors: {type: Array},
    department: {type: String, required: true},
});

const Products = mongoose.model('products', productSchema);

export {Products};