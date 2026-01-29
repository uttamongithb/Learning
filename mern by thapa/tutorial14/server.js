//import "dotenv/config";  
import express from 'express';
import dotenv from "dotenv";
import connectDb from './utils/db.js'
import router from './router/auth-router.js';
dotenv.config();




const app = express();

app.use(express.json())

app.use('/', router);



connectDb().then(() => {
    app.listen(5000, () => {
        console.log('server is running on port 5000')
    })
})