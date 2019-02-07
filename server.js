const express = require('express');
const bodyParser = require('body-parser');
const mongoose =  require('./db_connections/mongodb');

const app =  express();
app.listen(3000);

mongoose.startConnection();

