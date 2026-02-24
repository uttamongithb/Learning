import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect('mongodb://uttamkumar9234567_db_user:keDsAOATUOTlrJfj@ac-rvmaoie-shard-00-00.e8lezda.mongodb.net:27017,ac-rvmaoie-shard-00-01.e8lezda.mongodb.net:27017,ac-rvmaoie-shard-00-02.e8lezda.mongodb.net:27017/Practice?authSource=admin&replicaSet=atlas-14fyoe-shard-0&tls=true&retryWrites=true&w=majority')

console.log('connected to mongodb')
}

export default connectDB;