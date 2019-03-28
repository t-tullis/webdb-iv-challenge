
exports.seed = function(knex) {
  return knex('dish').insert([
    { name: 'Pizza' },//1
    { name: 'Tacos' },//2
    { name: 'Fried Rice' },//3
    { name: 'Pancakes' },//4
  ]);
};
