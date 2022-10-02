const router  = require('express').Router();

const 
{
    getallusers,
    getusersbyid,
    insertuser,
    updateusers,
    deleteusers

} = require('../controllers/users/UsersControllers');
const {UserValidation} = require('../validations/UserValidation');

router.get('/', getallusers);
router.get('/:id', getusersbyid);
router.post('/insert', UserValidation, insertuser);
router.put('/update/:id', updateusers);
router.delete('/delete/:id', deleteusers);

module.exports = router;