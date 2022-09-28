const jwt       = require('jsonwebtoken');
const screet    = '945499tt4j4t945t759ut45t4tj540t5t85t443jr9';
const user      = require('../../models/users/UsersModel');

const getToken = async(req, res) =>{
    try {
        const userlogin = await user.GetUserlogin(req.body.email);
        if(!userlogin){
            res.json({error : 'gak ada data!'});
            return false;            
        }
        const token = jwt.sign(
            {
                id          : userlogin.id,
                fullName    : userlogin.fullName,
                email       : userlogin.email,
                role        : userlogin.role
            }, screet
        )
        res.status(201).json({token : process.env.SECRET})
        var decode    = jwt.verify(token, screet);
        req.auth      = decode;
    } catch (error) {
        res.status(401).json({error : error});
    }   
}

module.exports ={
    getToken
}