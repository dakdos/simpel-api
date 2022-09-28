const knex = require('../../config/db');

const getallPost = () =>{
    const post = knex.select("*");
    post.from('post');
    return post;
}

const getPostbyid = (id) =>{
    const post = knex.select("*");
    post.where({ id : id })
    post.from('post')
    return post.first();
}

const insertPost = (data) => {
    return knex('post').insert(data);
}

const updatePost = (data, id) =>{
    return knex('post').where({ id : id }).update(data);
}

const deletePost = (id) =>{
    return knex('post').where({ id : id }).del();
}

module.exports = {
    getallPost,
    getPostbyid,
    insertPost,
    updatePost,
    deletePost
}