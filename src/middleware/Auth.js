const jwt       = require('jsonwebtoken');
const screet    = '945499tt4j4t945t759ut45t4tj540t5t85t443jr9';

const cekLogin = (req, res, next) =>{
    try {
        const authHeader = req.headers['authorization'];
        const token      = authHeader && authHeader.split(' ')[1];

        if(token == null){
            res.status(401).json({
                message : 'Token is Invalid'
            });
        }
        var decoded = jwt.verify(token, screet);
        req.auth    = decoded;
        next();

    } catch (error) {
        res.status(401).json({
            message : 'Token is Invalid'
        });
    }
}

module.exports = {
    cekLogin
}