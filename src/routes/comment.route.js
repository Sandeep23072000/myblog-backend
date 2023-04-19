const express = require('express');
const router = express.Router();
const api = require('../controller/comment.controller');


  router.post('/comment', api.comment );
  router.get('/comment', api.getComment );
  router.delete('/comment/:id', api.deleteComment );

module.exports = router;