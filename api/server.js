const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoDb = require('./Connections/mongoDbConnection');
const { Sequelize } = require('sequelize');
const sqlConnection = require('./Connections/sqlConnection');
const User = require('./User/Model');
const sequelize = require('./Connections/sqlConnection');

var jsonParser = bodyParser.json();
var urlEncodedParser = bodyParser.urlencoded({extended: false});

const port = 8080;

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
    console.log(`App is listening on port ${port}!`)

    mongoDb().then(() => {
        console.log('MongoDb connected');
    });

    try {
        sqlConnection().authenticate()
            .then(() => {
                console.log('Postgres connection has been established.');
            });
    }
    catch (error) {
        console.error('Failed to connect to postgres:', error);
    }
});