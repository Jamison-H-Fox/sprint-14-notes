/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    // don't forget the return statement
  return knex.schema.createTable('accounts', tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl.text('name', 128).unique().notNullable();
    // creates a numeric field called budget which is required
    tbl.decimal('budget').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    // drops the entire table, in other words undoes the table creation from above
    return knex.schema.dropTableIfExists('accounts');
};
