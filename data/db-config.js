const knex = require('knex');

const config = {
    client: 'sqlite3',
    connection: {
        // file path is with respect to root of repo
        filename: './data/users.db3', 
    },
    useNullAsDefault: true,
};

const db = knex(config);

module.exports = db;