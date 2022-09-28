const Mpost = require('../../models/post/PostModel');

const getallpost = async(req, res) =>{
    try {
        const allPost    = await Mpost.getallPost();
        res.json({post : allPost})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg :error});
    }
}

const getpostbyid = async(req, res) =>{
    try {
        const id = req.params.id;
        const post    = await Mpost.getPostbyid(id);
        res.json({post : post})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg :error});
    }
}

const insertpost= async(req, res) =>{
    try {
        const postData = {
            authorId    : req.body.authorId,
            parentId    : req.body.parentId,
            title       : req.body.title,
            metaTitle   : req.body.metaTitle,
            summary     : req.body.summary,
            published   : req.body.published,
            content     : req.body.content,
            createdAt   : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }
        Mpost.insertPost(postData)
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

const updatepost = async(req, res) =>{
    try {
        const id = req.params.id;
        const postData = {
            authorId    : req.body.authorId,
            parentId    : req.body.parentId,
            title       : req.body.title,
            metaTitle   : req.body.metaTitle,
            summary     : req.body.summary,
            published   : req.body.published,
            content     : req.body.content,
            updatedAt   : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }
        Mpost.updatePost(postData, id)
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

const deletepost = (req, res) =>{
    try {
        const id = req.params.id;
        Mpost.deletePost(id)
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
    getallpost,
    getpostbyid,
    insertpost,
    updatepost,
    deletepost
}