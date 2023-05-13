import {Products} from "../models/productModel.js";
import mongoose from "mongoose";



const getAllProducts = async (req, res) => {
    let{page,limit,sort,asc}=req.query;
    const skip=(page-1)*10;
    if(!page)page=1;
    if(!limit)limit=10;
    let filter={};
    let validCategory=["men","women","kids"];
    let category=req.query.Categories;
    if(category&&validCategory.includes(category)){
         filter =req.query.Categories;
         const products= await Products.find({category:filter}).populate("category").sort({sort:asc}).skip(skip).limit(limit);
    }
    const products= await Products.find().populate("category").sort({sort:asc}).skip(skip).limit(limit);
    if(!products){
        res.status(500).json({success:false});
    }
    res.send({page:page+1,limit:limit},products);
};
const getOneProduct = async (req, res) => {
    try {
        const products = await Products.findById(req.params.id).populate("category");
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

const createProduct= async (req, res) => {
    const products= new Products({
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        quantity:  req.body.quantity,
        price: req.body.price,
        seller_id: req.body.seller_id,
        rating:  req.body.rating,
        colors:  req.body.colors,
        department: req.body.department,
    countInStack: req.body.countInStack,
    category:req.body.category,
    
    });
    await Products.save();
    if(!products)
    return res.status(404).send("the product is not created ");
    res.send(products);

};
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
const upadteProduct= async(req,res)=>{
   if(! mongoose.isValidObjectId(req.params.id))
   { return res.status(400).send("invalid id")

   }
    const products = await Products.findById(req.body.category);
    if(!products){
        return res.status(400).send("invalid product")
    };
    products = await Products.findByIdAndUpadte(req.params.id,{
            name: req.body.name,
            img: req.body.img,
            description: req.body.description,
            quantity:  req.body.quantity,
            price: req.body.price,
            seller_id: req.body.seller_id,
            rating:  req.body.rating,
            colors:  req.body.colors,
            department: req.body.department,
        countInStack: req.body.countInStack,
        category:req.body.category,
        
    },{new:true})
    if(!products)
    return res.status(404).send("the product is not upadted ");
    res.send(products);

 }


export {getAllProducts,getOneProduct,createProduct,deleteProduct,upadteProduct};