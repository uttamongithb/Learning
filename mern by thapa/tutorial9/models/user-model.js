const userSchema = new mongoose.Schema({
    userName:{
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

export  const User = new mongoose.model('User', userSchema)