const knex = require('knex')({
    client : 'mysql2',
    connection: {
        host : 'localhost',
        port : 3306,
        user : 'root',
        password : 'root',
        database : 'belajar_node'
    }
})
module.exports = knex;