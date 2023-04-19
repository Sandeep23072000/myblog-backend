const Tag = require("./tag.route");
const Post = require("./post.route");
const Comment = require("./comment.route");
const Category = require("./category.route");



module.exports = function(app){
    app.use('/api/', Tag);
    app.use('/api/', Post);
    app.use('/api/', Comment);
    app.use('/api/', Category);
}