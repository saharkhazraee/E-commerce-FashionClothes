import express from "express"
import { createProduct, deleteProduct, getAllProduct, getOneProduct, updateProduct } from "../controllers/productCn.js"
import upload from "../Utils/UploadFile.js"
import isAdmin from "../Middleware/isAdmin.js"
const productRouter=express.Router()
productRouter.route('/').post(createProduct).get(getAllProduct)
productRouter.route('/:id').get(getOneProduct).patch(updateProduct).delete(deleteProduct)
export default productRouter;