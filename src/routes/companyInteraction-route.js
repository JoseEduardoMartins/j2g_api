'use strict';
//imports
const express = require('express');
const router = express.Router();
//controller
const controller = require('../controllers/companyInteraction-controller');
//ROUTES GET
router.get('/get', controller.get);
router.get('/getById', controller.getById);
//ROUTES POST
router.post('/set', controller.set);
//ROUTES PUT
router.put('/update', controller.update);
//export
module.exports = router;
