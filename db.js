var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
 things: things,
 element: element
}

function things () {
  return knex('music')
  .join('things', 'things.music_id', '=', 'music.id')
  .join('tune_stuff', 'tune_stuff.element_id', '=', 'thing_element_id')
  .select('music.name as name', 'tune_stuff.element as element', 'music.artist as artist')
  .orderBy('music.name')
}

function element () {
  return knex('things')
  .join('music', 'music.id', '=', 'things.music_id')
  .join('tune_stuff', 'things.element_id', '=', 'tune_stuff.element')
  .select('things.music_id as name', 'tune_stuff.element as element')
  .orderBy('music.name')
}
