import express from 'express';
import router from './router/auth-router.js';
import connectDb from './utils/db.js'
const app = express();

app.use(express.json())

app.use('/', router);



connectDb().then(() => {
    app.listen(5000, () => {
        console.log('server is running on port 5000')
    })
})