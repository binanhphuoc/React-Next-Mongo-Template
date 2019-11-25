const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    first: {
        type: String,
    },
    last: {
        type: String,
    },
    phone: {
        type: String
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = { User, UserSchema };