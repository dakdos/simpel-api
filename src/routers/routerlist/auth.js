const router  = require('express').Router();

const {getToken} = require('../../controllers/auth/AuthController');
router.post('/login', getToken);

module.exports = router;