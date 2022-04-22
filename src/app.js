'use strict';

const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

//Habilita o CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, Access-Control-Allow-Headers, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST, DELETE, OPTIONS");
    app.use(cors());
    next();
});

app.use('/customer', require('./routes/customer-route'));
app.use('/customerAddress', require('./routes/customerAddress-route'));
app.use('/customerPhone', require('./routes/customerPhone-route'));
app.use('/customerEmail', require('./routes/customerEmail-route'));
app.use('/customerUser', require('./routes/customerUser-route'));

app.use('/company', require('./routes/company-route'));
app.use('/companyContact', require('./routes/companyContact-route'));
app.use('/companyInteraction', require('./routes/companyInteraction-route'));

module.exports = app;
