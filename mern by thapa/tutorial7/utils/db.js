import mongoose from "mongoose";
const URI = 'mongodb+srv://uttamkumar9234567_db_user:keDsAOATUOTlrJfj@cluster0.e8lezda.mongodb.net/Practice?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async () => {
    try {
       await mongoose.connect(URI)
        console.log('mongodb is connected successfully')
    } catch (error) {
        console.error(error)
        process.exit()
    }
}

export default connectDB;