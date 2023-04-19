const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    discription: {
        type: String,
        // required: true,
    },
    status: {
        type: String,
        // default: 'Active',
        // required: true,
    },
    words: {
        type: String,
        // required: true,
    },
    new_words: {
        type: String,
        // required: true,
    },
    keyword: {
        type: String,
        // required: true,
    },
    meta_title: {
        type: String,
        // required: true,
    },
    meta_discription: {
        type: String,
        // required: true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('category', categorySchema);