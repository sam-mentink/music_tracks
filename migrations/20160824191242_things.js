exports.up = function(knex, Promise) {
    return knex.schema.createTable('things', function (table) {
      table.increments('id').primary()
      table.integer('music_id')
      table.integer('element_id')
    })
};

exports.down = function(knex, Promise) {
      return knex.schema.createTable('things')
}
