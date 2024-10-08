import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

import { postLogin, postSignUp } from './controllers/user.js'


const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL)

    if (conn) {
        console.log("MongoDB connected ✅")
    }
}
connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to petopia server"
    })

});

app.post("/signup", postSignUp);
app.post("/login",postLogin)



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})