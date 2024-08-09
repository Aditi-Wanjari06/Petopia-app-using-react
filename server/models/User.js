import { Schema, model, } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile_no: {
        type: Number,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const User = model('User', userSchema)

export default User;