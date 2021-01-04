const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;