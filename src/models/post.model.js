const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        // required: true,
    },
    title: {
        type: String,
        // required: true,
    },
    discription: {
        type: String,
        // required: true,
    },
    thumbnail: {
        type: String,
        // required: true,
    },
    features: {
        type: String,
        // required: true,
    },
    status: {
        type: String,
        // default: 'Active',
        // required: true,
    },
    slug: {
        type: String,
        slug: "title"
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

module.exports = mongoose.model('post', postSchema);