import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express())
app.use(cors())

import { postSignUp } from './controllers/user.js'

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




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})