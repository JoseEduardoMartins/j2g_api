'use strict';
//imports
const express = require('express');
const router = express.Router();
//controller
const controller = require('../controllers/customerAddress-controller');
//utils
// const authService = require('../services/auth-service');

// REQUEST GET
router.get('/get', controller.get);
router.get('/getById', controller.getById);
// REQUEST POST
router.post('/set', controller.set);
// REQUEST PUT
router.put('/update', controller.update);

module.exports = router;
