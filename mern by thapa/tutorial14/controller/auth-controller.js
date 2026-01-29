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
        console.log('req body data ', req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log('after findone')

        if (userExist) {
            return res.status(400).json({ message: 'email allready exist' });
        }
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound)
        console.log('jus before user created')
        const userCreated = await User.create({ username, email, phone, password })
        console.log('usercreated data', userCreated)

        res.status(201).json({ msg: 'registartion successfull', token: await userCreated.generateToken(), userId: userCreated._id.toString() });
    } catch (error) {
        res.status(500).json('internal server error');

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log(userExist)

        if (!userExist) {
            res.status(200).json({ message: 'User does not exist' })
        }

        const passwordValid = await bcrypt.compare(password, userExist.password);

        if (passwordValid) {
            res.status(200).json({ message: 'User login successful', token: await userExist.generateToken(), userId: userExist._id.toString() });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export default { home, register, login };