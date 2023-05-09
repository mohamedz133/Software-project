import {Products} from "../models/productModel.js";

const getAllProducts = async (req, res) => {
    const products = await Products.find();
    res.json(products);
}

export {getAllProducts};