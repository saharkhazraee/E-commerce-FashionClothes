import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import authRouter from "./routes/auth.js"
import productRouter from "./routes/product.js"
import {fileURLToPath} from "url"
import path from "path"
import uploadRouter from "./routes/uploadImg.js"
const __filename=fileURLToPath(import.meta.url)
export const __dirname =path.dirname(__filename)
const app=express()
app.use(cors({
    // origin:"http://localhost:5173",
    // methods: ["GET", "POST", "DELETE", "PUT"],
    // allowedHeaders: [
    //   "Content-Type",
    //   "Authorization",
    //   "Cache-Control",
    //   "Expires",
    //   "Pragma",
    // ],
    // credentials: true,
}))
app.use(cookieParser())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static('Public'))
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/product',productRouter)
app.use('/api/v1/upload',uploadRouter)

export default app