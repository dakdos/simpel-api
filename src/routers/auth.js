'use strict';
const router  = require('express').Router();

const {getToken} = require('../controllers/auth/AuthController');
const {AuthValidation} = require('../validations/AuthValidation');
router.post('/login', AuthValidation, getToken);

module.exports = router;