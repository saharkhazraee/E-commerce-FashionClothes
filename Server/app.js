import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import nodemon from "nodemon"
import morgan from "morgan"
const app=express()
app.use(cors({
    origin:"http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static('Public'))


export default app