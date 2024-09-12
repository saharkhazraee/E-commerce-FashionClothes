import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"],
        trim: true,
    },
    description:{
        type:"string",
        required:[true,"description is required"],
        trim: true,
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    image:{
        type:String,
        required:[true,"image is required"]
    },
    category:{
        type:String,
        required:[true,"category is required"],
    },
    brand:{
        type:String,
        required:[true,"brand is required"],
    },
    salePrice:{
        type:Number,
    },
    totalStock:{
        type:Number,
        required:[true,"totalStock is required"],
    }

},{timestamps:true})
const Product=mongoose.model("Product",productSchema)
export default Product