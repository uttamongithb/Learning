import User from "./userSchema";
import bcrypt from "bcrypt";

export const signup = async (req, res) =>{
    try {
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.json({success: false, message: 'user allready exist' })
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name, 
            email,
            password: hashedPassword
        });
        await user.save();

        res.json({success: true, message: 'Signup successfull'});
    } catch (error) {
        res.status(500).json({success: false, message: 'server error'})
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({message: "User not found"});
        
        const isMatch = bcrypt.compare(password, user.password);

        if(!isMatch) return res.status(401).json({message: "Invalid credentials"});

        res.json({message: "Login successful"});
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
}