const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const cardPostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true //only one name could be assigned to one cardPost
    },
    creator: {
        type: String,
        required: true
    },
    lastEdit: {
        type: Date,
        required: true
    },
    firstCreated: {
        type: Date,
        required: true
    },
    type1: {
        type: String,
        required: true
    },
    type2: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    shares: {
        type: Number,
        required: true
    },
    image: {
        type: String, //Link
        required: true
    },
    description: {
        type: String,
        required: true
    },
    download: {
        type: String, //Link
    },
    video: {
        type: String //Link
    },
});

var cardPost = mongoose.model('cardPost', cardPostSchema);

module.exports = { cardPost, cardPostSchema };