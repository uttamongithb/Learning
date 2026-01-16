import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
});

const User = mongoose.Model('User', userSchema);

export default User;