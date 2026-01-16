import express from "express";
import dotenv from 'dotenv';
const app = express();

dotenv.config();
const port = process.env.PORT




app.get('/', (req, res)=>{
   
    res.send("this is the first code which writting during learning")
})


app.listen(port, () =>{
    console.log("server is running on port: ", port)
})