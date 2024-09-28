const express = require('express');
const bodyParser = require('body-parser');
const professionalRoutes = require('./routes/professional');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/professional', professionalRoutes);

app.listen(PORT, () => {
    console.log('Web server is listening at port ' + PORT);
});