import mongoose from 'mongoose';
import bcrypt, { genSalt } from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    isAdmin: {
        type: Boolean
    }

});

userSchema.pre('save', async function (next) {
    const user = this;
    console.log('this is this from user', user)

    if (!user.isModified('password')) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        console.log('bcrypt error');
        next(error);
    }
});

userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userid: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        }, )
        
    } catch (error) {
        
    }
}

const User = new mongoose.model('User', userSchema)

export default User