/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()
  await knex('students').insert([
    { name: 'jamison', section: 0, email: 'jamison@fox.com'},
    { name: 'benton', section: 1, email: 'benton@fox.com'},
    { name: 'boston', section: 2, email: 'boston@fox.com'},
    { name: 'brielle', section: 3, email: 'brielle@fox.com'},
    { name: 'brittany', section: 0, email: 'brittany@fox.com'},
  ]);
};

// ** This uses the automatically generated form **
// *  Compare it to the 001-accounts.js
// *  This file uses async syntax and the .del() method
// *  rather than the .truncate() taught in class.