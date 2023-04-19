const express = require('express');
const router = express.Router();
const api = require('../controller/category.controller');


router.post('/category', api.category );
router.get('/category', api.getCategory );
// router.delete('/category/:id', api.deleteCategory );

module.exports = router;