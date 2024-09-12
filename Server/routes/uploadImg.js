import express from 'express'
import upload from '../Utils/UploadFile.js'
import isAdmin from '../Middleware/isAdmin.js'
import { deleteImg, uploadImg } from '../controllers/uploadCn.js'
const uploadRouter=express.Router()
uploadRouter.route('/').post(upload.single('file'),uploadImg).delete(isAdmin,deleteImg)
export default uploadRouter
