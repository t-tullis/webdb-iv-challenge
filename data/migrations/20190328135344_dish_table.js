
exports.up = function(knex) {
    return knex.schema.createTable('dish', function(table) {
      // primary key, called id and make it auto-increment
      table.increments();
  
      table
        .string('name', 128)
        .notNullable()
        .unique();
  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dish');
  };
