const home = async (req, res) => {
    try {
        res.status(200).send('hello this is the home page  from controller')
    } catch (error) {
        console.log(error)
        
    }
}
const register = async (req, res) => {
    try {
        res.status(200).send('hello this is registration page using controllers');
    } catch (error) {
        res.status(500).send('page not found');
        
    }
}

export default { home, register };