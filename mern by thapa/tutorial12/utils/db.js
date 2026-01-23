import mongoose from "mongoose";
const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongodb is connected successfully')
    } catch (error) {
        console.error(error)
        process.exit()
    }
}

export default connectDB;