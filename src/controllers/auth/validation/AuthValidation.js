const joi       = require('joi'); 
const user      = require('../../../models/users/UsersModel');

const AuthLogin = joi.object({
    email : joi.required(),
});


const AuthValidation = async (req, res, next) => {
    
    try {
        const data = AuthLogin.validate(req.body);
        if (data.error) {
            return res.status(201).json({
                success : false, 
                message : data.error.details[0].message
            });
        }

        const userlogin = await user.GetUserlogin(req.body.email);
         if(!userlogin){
            return res.status(201).json({
                success : false, 
                message : "Data tidak ditemukan"
            });
        }

        /** callback fungsi next atau lanjut */
        next();

    } catch (error) {
        return res.status(400).json({
            success : false, 
            message : error
        })
    }
}

module.exports = {
    AuthValidation
}