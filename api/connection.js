const mongoose = require('mongoose');
const User = require('./User/Model');

const connection = 'mongodb://mongodb:27017/mongo-test';

const connectDb = () => {
    return mongoose.connect(connection);
};

module.exports = connectDb;