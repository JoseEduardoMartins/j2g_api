'use strict';
//imports
const express = require('express');
const router = express.Router();
//controller
const controller = require('../controllers/customerEmail-controller');
//utils
//const authService = require('../services/auth-service');
//ROUTE GET
router.get('/get', controller.get);
router.get('/getById', controller.getById);
//ROUTE POT
router.post('/set', controller.set);
//ROUTE PUT
router.put('/update', controller.update);
//export
module.exports = router;
