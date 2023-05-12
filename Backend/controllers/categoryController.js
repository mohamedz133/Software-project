import {category} from "../models/categoryModel.js";

const getCategory = async (req, res) => {
    const category= await category.find();
    if(!category){
        res.status(500).json({success:false});
    }
    res.send(category);
};
const newCategory= async (req, res) => {
    let category= new category({
        name:req.body.name,
        icon:req.body.icon,
        color:req.body.color,

    });
    category=await category.save();
    if(!category)
    return res.status(404).send("the category is not created ");
    res.send(category);

};
const deleteCategory=async(req,res)=>{
   category=await category.findByIdAndRemove(req.params.id).then(
        category=>{
            if(category){
                return res.status(200).json({success:true},{message:"the category is deleted"})
            }else{
                return res.status(404).json({success:false,message:"the category is not found "})
            }
        }
    ).catch(err=>{
        return res.status(400).json({success:false,error:err})
    })
}
const upadteCategory= async(req,res)=>{
    category=await category.findByIdAndUpadte(req.params.id,{
        name:req.body.name,
        icon:req.body.icon,
        color:req.body.color,
    },{new:true})
    if(!category)
    return res.status(404).send("the category is not  upadted ");
    res.send(category);

 }




export {getCategory,newCategory,deleteCategory,upadteCategory};