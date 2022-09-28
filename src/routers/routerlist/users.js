const router  = require('express').Router();

const 
{
    getallusers,
    getusersbyid,
    insertuser,
    updateusers,
    deleteusers

} = require('../../controllers/users/UsersControllers');

router.get('/', getallusers);
router.get('/:id', getusersbyid);
router.post('/insert', insertuser);
router.put('/update/:id', updateusers);
router.delete('/delete/:id', deleteusers);

module.exports = router;