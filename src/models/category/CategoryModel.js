const knex = require('../../config/db');

const getallCategory = () =>{
    const category = knex.select("*");
    category.from('category');
    return category;
}

const getaCategorybyid = (id) =>{
    const category = knex.select("*");
          category.from('category')
          category.where({ id : id })
    return category.first();
}

const insertCategory = (data) => {
    return knex('category').insert(data);
}

const updateCategory = (data, id) =>{
    return knex('category').where({ id : id }).update(data);
}

const deleteCategory = (id) =>{
    return knex('category').where({ id : id }).del();
}

module.exports = {
    getallCategory,
    getaCategorybyid,
    insertCategory,
    updateCategory,
    deleteCategory
}