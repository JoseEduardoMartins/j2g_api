'use strict';

const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();

//carrega as rotas
const customerRoutes = require('./routes/customer-route');
const customerPhoneRoutes = require('./routes/customerPhone-route');
const customerEmailRoutes = require('./routes/customerEmail-route');
const customerUserRoutes = require('./routes/customerUser-route');
const companyRoutes = require('./routes/company-route');

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

app.use('/customer', customerRoutes);
app.use('/customerPhone', customerPhoneRoutes);
app.use('/customerEmail', customerEmailRoutes);
app.use('/customerUser', customerUserRoutes);
app.use('/company', companyRoutes);

module.exports = app;
