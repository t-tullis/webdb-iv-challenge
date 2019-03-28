
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', function(table) {
      table.increments();
  
      table
        .string('ingredients')
        .notNullable()

        table
        .float('quantity')

        table
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredients');
  };

