import bcryptjs from "bcryptjs"
// import jwt from "jsonwebtoken"
import catchAsync from "../Utils/catchAsync.js"
import HandleError from "../Utils/handleError.js"
import User from "../models/userMd.js"
import jwt from "jsonwebtoken"
export const register=catchAsync(async(req,res,next)=>{
     
      const {userName,email,password:password}=req.body
    console.log(userName,email,password)
    const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    if(!regex.test(password)){
        return next(new HandleError("password invalid",400))
    }
    const hashPassword=bcryptjs.hashSync(password,10)
    const user=await User.create({userName,email,password:hashPassword})
    return res.status(200).json({
        status:"success",
        data:user,
        message:"register successfully"
    })
})
export const login=catchAsync(async(req,res,next)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    const hashPassword=bcryptjs.compareSync(password,user.password)
    if(!user || !hashPassword){
        return next(new HandleError("invalid email or password",400))
    }
    const token=jwt.sign({
        id:user._id,role:user.role,password:user.password,userName:user.userName
    },process.env.JWT_SECRET)
    return res.status(200).json({
        status:"success",
        data:{token,
            user: {
                email: user.email,
                role: user.role,
                id: user._id,
                userName: user.userName,
              },
        },
        message:"login successfully"
    })
})