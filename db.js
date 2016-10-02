var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
 things: things,
 elements: elements
}

function things () {
  return knex('music')
  .join('things', 'things.music_id', '=', 'music.id')
  .select('music.name', 'things.element_id as thing_element_id')
  .join('tune_stuff', 'tune_stuff.element_id', '=', 'thing_element_id')
  .select('music.name as name', 'tune_stuff.element as element', 'music.artist as artist')
  .orderBy('music.name')
}

function elements () {
  return knex('tune_stuff')
  .join('things', 'things.element_id', '=', 'tune_stuff.element')
  .select('tune_stuff.element', 'things.music_id as element')
  .where('tune_stuffID', '=', tune_stuff.elementID)
}
