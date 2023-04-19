const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    status: {
        type: String,
        // default: 'Active',
        // required: true,
    },
    mobile: {
        type: String,
        // required: true,
    },
    discription: {
        type: String,
        // required: true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('comment', commentSchema);