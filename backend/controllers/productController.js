const { default: mongoose } = require("mongoose")
const ProductModel = require("./../models/ProductModel")

const getAllProducts = async(req,res)=>{
     const products = await ProductModel.find({}).sort({createdAt:-1})
     res.status(200).json({products})
}

const getAProduct = async (req,res)=>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error:"Invalid product id"})
    }
    const product = await  ProductModel.findById(id);
    if (!product) {
        return res.status(404).json({error:"Product not found"})
    }
    res.status(200).json({product})
    
}

const addProduct =async (req,res)=>{
    const {title,description,price,delivery,payment,location,imageUrl,additionalImages,user}= req.body;
    try {
        await ProductModel.create({title,description,price,delivery,payment,location,imageUrl,additionalImages,user});
        return res.status(200).json({message:"Product added successfully"})
    }catch(error) {
         return res.status(400).json({error:"Error adding product to database. Please try again later"})   
    }
}
const editProduct = ()=>{
    
}
const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error:'Invalid product id'})
    }
    const product = await ProductModel.findById(id);
    if(!product) {
        return res.status(404).json({erro:'Product not found'})
    }
    try {
        await ProductModel.findOneAndDelete({_id:id})
         return res.status(200).json({message:'Product has been deleted successfully'})
    }catch(error) {
        return res.status(400).json({error:"Failed to delete item. Please try again later"})
    }
}
module.exports = {
    getAProduct,
    getAllProducts,
    addProduct,
    editProduct,
    deleteProduct
}