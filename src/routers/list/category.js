const router  = require('express').Router();

const 
{
    getallcategory,
    getcategorybyid,
    insertdtcategory,
    updatedtcategory,
    deletecategory

} = require('../../controllers/category/CategoryControllers');

router.get('/', getallcategory);
router.get('/:id', getcategorybyid);
router.post('/insert', insertdtcategory);
router.put('/update/:id', updatedtcategory);
router.delete('/delete/:id', deletecategory);

module.exports = router;