import express from 'express';
import multer from 'multer';
import uploadFile from './services/storage.service.js';

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage()});

app.post('/create-post',upload.single('image'), async (req, res)=>{
    //console.log(req.body);
    //console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    console.log(result, 'from app.js')

    res.send({ message: 'hey how are you'})
})


export default app;