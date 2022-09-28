const Mcategory = require('./../../models/category/CategoryModel');

//READ ALL DATA 
const getallcategory = async(req, res) =>{
    try {
        const category    = await Mcategory.getallCategory();
        res.json({category : category})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg :error});
    }
}

const getcategorybyid = async(req, res) =>{
    try {
        const id = req.params.id;
        const category    = await Mcategory.getaCategorybyid(id);
        res.json({category : category})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg :error});
    }
}

const insertdtcategory = async(req, res) =>{
    try {
        const categoryData = {
            parentId    : req.body.parentId,
            title       : req.body.title,
            slug        : req.body.slug,
            content     : req.body.content
        }
        Mcategory.insertCategory(categoryData)
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

const updatedtcategory = async(req, res) =>{
    try {
        const id = req.params.id;
        const categoryData = {
            parentId    : req.body.parentId,
            title       : req.body.title,
            slug        : req.body.slug,
            content     : req.body.content
        }
        Mcategory.updateCategory(categoryData, id)
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

const deletecategory = (req, res) =>{
    try {
        const id = req.params.id;
        Mcategory.deleteCategory(id)
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
    getallcategory,
    getcategorybyid,
    insertdtcategory,
    updatedtcategory,
    deletecategory
}