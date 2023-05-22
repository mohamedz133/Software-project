import {Products} from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

// @desc    Get all products
// @route   GET /api/products
// @access  public
const getAllProducts =  asyncHandler (async (req, res) => {
    
        const department = req.query.department;
        const page = parseInt(req.query.page) || 1;
        // num of docs that i will return 
        const limit = parseInt(req.query.limit)|| 10;
        // filtering for dep {men,womam,kids}
        const filter = {};
        if (department) {
            filter.department = department;
        }

        const totalProducts = await Products.countDocuments(filter);
        const totalPages = Math.ceil(totalProducts / limit);

        const products = await Products.find(filter)
            .skip((page - 1) * limit)
            .limit(limit);

        res.json({
            products,
            currentPage: page,
            totalPages,
            totalProducts,
        });
    
})
// @desc    Get product by id
// @route   GET /api/products/:id
// @access  Private
const getOneProduct = asyncHandler(async (req, res) => {
   
        const product = await Products.findById(req.params.id);
        if (!product)
        {
            return res.status(404).json({message: "product not found!"});
        }
        res.json(product);
   
})
// @desc    Create products
// @route   POST /api/products
// @access  Private
const createProduct=  asyncHandler(async (req, res) => {
  
        const product = await Products.create(req.body);
        if (!product)
        {
            return res.status(404).json({message: "product not created!"});
        }
        res.json(product);
   
})
// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct=asyncHandler( async(req,res)=>{
   
    const products=await Products.findByIdAndRemove(req.params.id);
            if(!products){
                return res.status(404).json({message:"the product is not found "})
            }
            res.json(products);
        
})
// @desc    Update products
// @route   PUT /api/products/:id
// @access  Private
const upadteProduct= asyncHandler(async(req,res)=>
{
   
    const products = await Products.findById(req.body.id);
    if(!products){
        return res.status(404).send("invalid product")
    };
    products = await Products.findByIdAndUpadte(req.params.id, req.body, {new: true})
    res.json(products);
      

 })


export {getAllProducts,getOneProduct,createProduct,deleteProduct,upadteProduct};