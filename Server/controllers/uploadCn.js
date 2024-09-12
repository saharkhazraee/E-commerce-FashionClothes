import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import { __dirname } from "../app.js";
import fs from 'fs'
export const uploadImg=catchAsync(async(req,res,next)=>{
    const file=req.file;
    if(!file) return next(new HandleError("Please upload an image",400));
   return res.status(200).json({
        status:"success",
        data:file
    })
})
export const deleteImg=catchAsync(async(req,res,next)=>{
    
    const {name}=req.body;
    fs.unlinkSync(`${__dirname}/Public/${name}`);
   return res.status(200).json({
        status:"success",
        message:'image deleted'
    })
})