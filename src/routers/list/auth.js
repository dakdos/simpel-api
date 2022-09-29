'use strict';
const router  = require('express').Router();

const {getToken} = require('../../controllers/auth/AuthController');
const {AuthValidation} = require('../../controllers/auth/validation/AuthValidation');
router.post('/login', AuthValidation, getToken);

module.exports = router;