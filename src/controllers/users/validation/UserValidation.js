const joi = require('joi');

const User = joi.object({
    fullname     : joi.required(), 
    mobile       : joi.required(), 
    email        : joi.required(), 
    passwordHash : joi.required(),
});

const UserValidation = async(req, res, next) => {
    try {
        const data = User.validate(req.body);
        if (data.error) {
            return res.status(201).json({
                success : false, 
                message : data.error.details[0].message
            });
        }
        next();
    } catch (error) {
        return res.status(400).json({
            success : false, 
            message : error
        });
    }
}

module.exports = {
    UserValidation
}