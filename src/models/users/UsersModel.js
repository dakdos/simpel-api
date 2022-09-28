const knex = require('../../config/db');

const getallUsers = () =>{
    const users = knex.select("*");
    users.from('user');
    return users;
}

const getuserstbyid = (id) =>{
    const user = knex.select("*");
    user.where({ id : id })
    user.from('user')
    return user.first();
}

const insertUsers = (data) => {
    return knex('user').insert(data);
}

const updateUsers = (data, id) =>{
    return knex('user').where({ id : id }).update(data);
}

const deleteUsers = (id) =>{
    return knex('user').where({ id : id }).del();
}

const GetUserlogin = (email) =>{
    const user = knex.select("*");
    user.where({ email : email })
    user.from('user')
    return user.first();
}

module.exports = {
    getallUsers,
    getuserstbyid,
    insertUsers,
    updateUsers,
    deleteUsers,
    GetUserlogin
}