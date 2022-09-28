const router        = require('express').Router();
const {cekLogin}    = require('./../middleware/Auth')
const auth          = require('./routerlist/auth');
const category      = require('./routerlist/category');
const post          = require('./routerlist/post');
const users         = require('./routerlist/users');

router.use('/category',cekLogin, category);
router.use('/post', post);
router.use('/users', users);
router.use('/auth', auth);


router.use('/', (req, res) => {
    res.send('INDEX');
})

module.exports = router;