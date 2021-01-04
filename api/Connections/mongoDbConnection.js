const mongoose = require('mongoose');
const User = require('../User/Model');

const connection = 'mongodb://mongo:27017/mongo-test';

const mongoDbConnection = () => {
    return mongoose.connect(connection);
};

module.exports = mongoDbConnection;