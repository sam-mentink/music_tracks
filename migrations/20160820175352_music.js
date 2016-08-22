exports.up = function(knex, Promise) {
  return knex.schema.createTable('music', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('artist')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('music')
}
