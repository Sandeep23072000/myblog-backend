const express = require('express');
const router = express.Router();
const api = require('../controller/tag.controller');


  router.post('/tag', api.tag );
  router.get('/tag', api.getTag );
  // router.delete('/tag/:id', api.deleteTag );

module.exports = router;