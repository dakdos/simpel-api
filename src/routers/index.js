const router        = require('express').Router();
const {cekLogin}    = require('./../middleware/Auth')
const auth          = require('./list/auth');
const category      = require('./list/category');
const post          = require('./list/post');
const users         = require('./list/users');

router.use('/category',cekLogin, category);
router.use('/post', post);
router.use('/users', users);
router.use('/auth', auth);


router.use('/', (req, res) => {
    res.send('oke oke');
})

module.exports = router;