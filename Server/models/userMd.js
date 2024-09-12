import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, 'email exist'],
        match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm, "invalid email"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
})
const User = mongoose.model("User", userSchema)
export default User