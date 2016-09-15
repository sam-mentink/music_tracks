var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
 linkTrack: linkTrack,
 tracks: tracks,
 things: things
}

function linkTrack () {
  return knex('music')
    .join('music', 'music.id', '=', 'music' )
    .join('tune_stuff', 'tune_stuff.id', '=', 'element' )
    .select('music', 'music.element as element')
}

function tracks () {
  return knex('music')
  // .join('tune_stuff, tune_stuff.id, '=', 'tune_stuff.element')
  .select('music.name', 'music.artist')
  // .select('tune_stuff.id')
}

function things () {
  return knex('music')
  .join('things', 'things.music_id', '=', 'music.id')
  .select('music.name', 'things.element_id as thing_element_id')
  .join('tune_stuff', 'tune_stuff.element_id', '=', 'thing_element_id')
  .select('music.name as name', 'tune_stuff.element as element')
  .orderBy('music.name')
}



// .join('breeds', 'dogs.breed_id', '=', 'breeds.id')
// .select('dogs.name', 'breeds.name as breed')
