import express from 'express';
import multer from 'multer';
import uploadFile from './services/storage.service.js';
import postModel from './models/post.model.js';

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/create-post', upload.single('image'), async (req, res) => {
    //console.log(req.body);
    //console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    console.log(post)

    return res.status(201).json({ post });


});


export default app;