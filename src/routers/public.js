const router  = require('express').Router();
const 
{
    getallcategory,

} = require('../controllers/category/CategoryControllers');

router.get('/list/category', getallcategory);

module.exports = router;