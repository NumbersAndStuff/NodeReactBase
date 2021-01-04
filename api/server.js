const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDb = require('./connection');
const User = require('./User/Model');

var jsonParser = bodyParser.json();
var urlEncodedParser = bodyParser.urlencoded({extended: false});

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => res.send('Hello!'));

app.get('/users', async (req, res) => {
    const users = await User.find();

    res.json(users);
});

app.post('/users-create', jsonParser, async (req, res) => {
    console.log(req.body);
    const user = new User({ Username: req.body.username });
    console.log(user);
    await user.save().then(() => console.log('User created'));
    res.send(`User ${user.Username} created\n`);
});

app.listen(port, function() {
    console.log(`App is listening on port http://${host}:${port}!`)

    connectDb().then(() => {
        console.log('MongoDb connected');
    });
});