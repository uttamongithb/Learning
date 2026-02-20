import express from 'express';

const app = express();
app.use(express.json());

let users = [
    {
        name: 'uttam',
        email: 'uttam@gmail.com',
        password: '123456',
        textcontent: 'Who are you'

    }
];

app.get('/', (req, res) => {
    res.status(200).send({ users });
    console.log(users);
});

app.post('/', (req, res) => {
    console.log(req.body)
    const { name, email, password, textcontent } = req.body;

    users.push({ name, email, password, textcontent });

    res.status(200).send({ message: 'Users added', users })

});


app.put('/', (req, res) => {
    const { email, name, password, textcontent } = req.body;

    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    user.name = name || user.name;
    user.password = password || user.password;
    user.textcontent = textcontent || user.textcontent;


    res.status(200).send({ message: "Updated", user });
})



app.delete('/', (req, res) => {
    const { email } = req.body;

    users = users.filter(u => u.email !== email);

    res.status(200).send({ message: 'users deleted successfully', users })

    console.log(email);
})




app.listen(3000, () => {
    console.log('server is running on port 3000');
}) 