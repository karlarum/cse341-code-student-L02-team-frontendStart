require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/professional', professionalRoutes);
app.use(cors());

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT);
        console.log(`Connected to DB and listening on ${PORT}`);
    }
});