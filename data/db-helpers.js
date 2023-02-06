const db = require('./db-config');

// resolves to an array of users
db.select('*').from('users'); 
db('users') // this is a shortcut for the query above

// resolves to an array containing any users that  match the query
db('users').where( { id: 3 });

// resolves to an array containing the id of the new user
db('users').insert({ name: 'amanda', age: 76 });

// resolves to an array containing the count of records updated
db('useres').where({ id: 5 }).update({ age: 77 });

// resolves to an array containing the count of rows deleted
db('users').where({ id: 5 }).del()