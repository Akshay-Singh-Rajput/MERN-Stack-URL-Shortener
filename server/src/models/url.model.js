const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        required: true
    },
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    }
},
    {
        versionKey: false,
        timestamps: false,
    }
);

const URLModel = mongoose.model('Url', URLSchema);
module.exports = { URLModel }