import express from 'express';
const app = express();

let users = [
    {id:1, name: 'uttam'},
    {id:2, name: 'baby'}
]

app.get('/', (req, res) => {
    res.status(200).send('welcome to uttam learning page', users);
})

app.get('/register', (req, res) => {
    res.status(200).send('welcome to our registration page');
})

app.get('/users', (req, res) => {
    res.status(200).send(users[1].name);
})


app.listen(5000, ()=>{
    console.log('server is running on port 5000')
})