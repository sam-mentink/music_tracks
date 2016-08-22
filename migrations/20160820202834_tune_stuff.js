
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tune_stuff', function (table) {
    table.increments('id').primary()
    table.string('element')
    table.integer('element_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.createTable('tune_stuff')
};
