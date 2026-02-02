//import "dotenv/config";  
import express from 'express';
import dotenv from "dotenv";
import connectDb from './utils/db.js'
import router from './router/auth-router.js';
import errorMiddleware from './middlewares/error-middleware.js';
dotenv.config();




const app = express();

app.use(express.json())

app.use('/', router);

app.use(errorMiddleware);

connectDb().then(() => {
    app.listen(5000, () => {
        console.log('server is running on port 5000')
    })
})