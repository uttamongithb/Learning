import express from 'express';
import router from './router/auth-router.js';
const app = express();



app.use('/a', router);



app.listen(5000, ()=>{
    console.log('server is running on port 5000')
})