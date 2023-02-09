/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('accounts').truncate()
    .then(function () {
      // add data into insert
      return knex('accounts').insert([
        { name: 'Stephenson', budget: 10000 },
        { name: 'Gordon & Gale', budget: 40400 },
        { name: 'Megaphone', budget: 5000 },
        { name: 'Zenith Solar', budget: 5 },
        { name: 'Deep Roots Nutrition', budget: 50000 },
      ]);
    });
};
