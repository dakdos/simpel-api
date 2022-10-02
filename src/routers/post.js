const router  = require('express').Router();

const 
{
    getallpost,
    getpostbyid,
    insertpost,
    updatepost,
    deletepost

} = require('../controllers/post/PostControllers');

router.get('/', getallpost);
router.get('/:id', getpostbyid);
router.post('/insert', insertpost);
router.put('/update/:id', updatepost);
router.delete('/delete/:id', deletepost);

module.exports = router;