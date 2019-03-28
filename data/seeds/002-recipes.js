
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'Italian Style Pizza', dish_id: 1 }, // 1
    { name: 'Super Cheese Pizza', dish_id: 1 }, // 1
    { name: 'Tex Mex', dish_id: 2 }, // 2
    { name: 'Grannys', dish_id: 2 }, // 2
    { name: 'Monkey King Fried Rice', dish_id: 3 }, // 3
    { name: 'Mamas Fried Rice', dish_id: 3 }, // 3
    { name: 'Blueberry Cinnamon Toast Crunch Pancakes', dish_id: 4 }, // 4
    { name: 'Strawberry Delight Pancakes', dish_id: 4 }, // 4
  ]);
};
