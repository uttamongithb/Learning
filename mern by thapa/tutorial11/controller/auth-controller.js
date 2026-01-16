import User from '../models/user-model.js'



const home = async (req, res) => {
    try {
        res.status(200).send('hello this is the home page  from controller')
    } catch (error) {
        console.log(error)

    }
}
const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });

        if(userExist){
            return res.status(400).json({message: 'email allready exist' });
        }

        const userCreated = await User.create({username, email, phone, password})
        console.log(userCreated)

        res.status(200).json({ msg: userCreated });
    } catch (error) {
        res.status(500).json('internal server error');

    }
}

export default { home, register };