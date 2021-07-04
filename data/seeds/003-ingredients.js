
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredients: 'Dough, Sausage, Cheese, Sauce', recipe_id: 1}, // 1
    { ingredients: 'Dough, Cheese, Sauce', recipe_id: 2 }, // 1
    { ingredients: 'Meat, Cheese, Salsa', recipe_id: 3 }, // 2
    { ingredients: 'Meat, Cheese, Salsa, Lettuce', recipe_id: 4 }, // 2
    { ingredients: 'Spam, eggs, chinese sausage, lettuce', recipe_id: 5 }, // 3
    { ingredients: 'Maple sausage, Bacon, Eggs, Sugar, Soy sauce', recipe_id: 6  }, // 3
    { ingredients: 'Blueberries, Cinnamon Toast Crunch, Pancake batter', recipe_id: 7  }, // 4
    { ingredients: 'Strawberries, Pancake Batter', recipe_id: 8  }, // 4
  ]);
};
