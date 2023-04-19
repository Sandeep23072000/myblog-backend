const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/myblog')

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

require('./src/routes/route')(app);

module.exports = app;