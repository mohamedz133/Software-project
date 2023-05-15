import {Products} from "../models/productModel.js";
import mongoose from "mongoose";



const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

const getOneProduct =async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product)
        {
            return res.status(404).json({message: "product not found!"});
        }
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

const createProduct=  async (req, res) => {
    try {
        const product = await Products.create(req.body);
        if (!product)
        {
            return res.status(404).json({message: "product not created!"});
        }
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}
const deleteProduct=async(req,res)=>{
    const products=await Products.findByIdAndRemove(req.params.id).then(
        products=>{
            if(products){
                return res.status(200).json({success:true},{message:"the product is deleted"})
            }else{
                return res.status(404).json({success:false,message:"the product is not found "})
            }
        }
    ).catch(err=>{
        return res.status(400).json({success:false,error:err})
    })
}
const upadteProduct= async(req,res)=>
{
    const products = await Products.findById(req.body.id);
    if(!products){
        return res.status(400).send("invalid product")
    };
    products = await Products.findByIdAndUpadte(req.params.id, req.body, {new: true})
    if(!products)
    return res.status(404).send("the product is not upadted ");
    res.send(products);

 }


export {getAllProducts,getOneProduct,createProduct,deleteProduct,upadteProduct};