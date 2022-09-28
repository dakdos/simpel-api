const bcrypt    = require('bcrypt');
const salt      = bcrypt.genSaltSync(10);
const Musers    = require('../../models/users/UsersModel');

//READ ALL DATA 
const getallusers = async(req, res) =>{
    try {
        const allUsers    = await Musers.getallUsers();
        res.json({users : allUsers})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg :error});
    }
}

const getusersbyid = async(req, res) =>{
    try {
        const id = req.params.id;
        const idUsers    = await Musers.getuserstbyid(id);
        res.json({users : idUsers})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg :error});
    }
}

const insertuser= async(req, res) =>{
    try {
        const postData = {
            fullName        : req.body.fullName,
            mobile          : req.body.mobile,
            email           : req.body.email,
            passwordHash    : bcrypt.hashSync(req.body.passwordHash, salt),
            role            : 0,
            registeredAt    : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }
        Musers.insertUsers(postData)
        .then(row => {
            res.json({
                status : "Berhasil Insert"
            });
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({msg :error});
    }
}

const updateusers = async(req, res) =>{
    try {
        const id = req.params.id;
        const postData = {
            fullName        : req.body.fullName,
            mobile          : req.body.mobile,
            email           : req.body.email,
            passwordHash    : bcrypt.hashSync(req.body.passwordHash, salt),
            updatedAt       : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }
        Musers.updateUsers(postData, id)
        .then(row => {
            res.json({
                status : "Berhasil update"
            });
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({msg :error});
    }
}

const deleteusers = (req, res) =>{
    try {
        const id = req.params.id;
        Musers.deleteUsers(id)
        .then(row => {
            res.json({
                status : "Berhasil Dihapus"
            });
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({pesan : error});
    }
}


module.exports = {
    getallusers,
    getusersbyid,
    insertuser,
    updateusers,
    deleteusers,
}