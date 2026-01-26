import User from '../models/user-model.js';
import bcrypt from 'bcrypt'



const home = async (req, res) => {
    try {
        res.status(200).send('hello this is the home page  from controller')
    } catch (error) {
        console.log(error)

    }
}
const register = async (req, res) => {
    try {
        console.log('req body data ',req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log('after findone')

        if (userExist) {
            return res.status(400).json({ message: 'email allready exist' });
        }
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound)
      console.log('jus before user created')
        const userCreated = await User.create({ username, email, phone, password})
        console.log('usercreated data',userCreated)

        res.status(201).json({ msg: userCreated, token: await userCreated.generateToken() });
    } catch (error) {
        res.status(500).json('internal server error');

    }
}

export default { home, register };