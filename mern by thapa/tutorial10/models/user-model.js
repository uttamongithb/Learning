import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    password:{
        type: String
    },
    isAdmin:{
        type: Boolean
    }

});

const User = new mongoose.model('User', userSchema)

export default User