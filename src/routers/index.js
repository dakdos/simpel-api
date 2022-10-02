const router        = require('express').Router();
const {cekLogin}    = require('./../middleware/Auth')
const auth          = require('./auth');
const category      = require('./category');
const post          = require('./post');
const users         = require('./users');
const public         = require('./public');

router.use('/category',cekLogin, category);
router.use('/post', post);
router.use('/users', users);
router.use('/auth', auth);
router.use('/public',public);


router.use('/', (req, res) => {
    res.send('oke oke');
})

module.exports = router;