
exports.up = function(knex) {
    return knex.schema.createTable('recipes', function(table) {
      table.increments();
  
      table
        .string('name', 128)
        .notNullable()
        .unique();

        table
        .integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dish')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes');
  };
