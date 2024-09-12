import path from "path";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import Product from "../models/productMd.js";
import fs from "fs"
import { __dirname } from "../app.js";
export const createProduct = catchAsync(async (req, res, next) => {
    try{
        const newProduct = await Product.create(req.body);
      return res.status(201).json({
        status: "success",
        data: newProduct,
      });
      }catch(err){
        console.log(err)
      }
})
export const getAllProduct=catchAsync(async(req,res,next)=>{
const features=new ApiFeatures(Product,req.query).filters().sort().paginate().limitFields().populate()
const products=await features.query
return res.status(200).json({
  status: "success",
  data: products,
});

})
export const getOneProduct=catchAsync(async(req,res,next)=>{
  const {id}=req.params
  const product=await Product.findById(id)
  if (!product) {
    return next(new HandleError("product not found", 404));
  }
  return res.status(200).json({
    status: "success",
    data: product,
  });
})
export const updateProduct=catchAsync(async(req,res,next)=>{
  const {id}=req.params
  const updateProduct=await Product.findByIdAndUpdate(id,req.body,{new:true})
  return res.status(200).json({
    status: "success",
    data: updateProduct,
})
})
export const deleteProduct=catchAsync(async(req,res,next)=>{
  const deleteProduct=await Product.findByIdAndDelete(req.params.id)
  if(deleteProduct.image){
    fs.unlinkSync(`${__dirname}/Public/${deleteProduct.image}`)
  }
  return res.status(200).json({
    status: "success",
    message: "delete successfully",
  });
})