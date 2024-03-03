import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 25
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    gender: {
        type: String,
        required: true,
        enum:["male", "female"]
    },
    profilePic: {
        type: String,
        default: "/avatar.png"
    }
    // createdAt, updatedAt fields
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;