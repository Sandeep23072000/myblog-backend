const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const api = require('../controller/post.controller');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage })


router.post('/post/add', upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "features", maxCount: 1 },
  ]), api.post);
router.get('/post', api.getAllPost);
router.get('/post/:slug', api.getPost);
// router.delete('/post/:id', api.deletePost);

module.exports = router;