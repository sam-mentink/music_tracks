var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
 linkTrack: linkTrack,
 tracks: tracks,
 test: test
}

function linkTrack () {
  return knex('music')
    .join('music', 'music.id', '=', 'music' )
    .join('tune_stuff', 'tune_stuff.id', '=', 'element' )
    .select('music', 'music.element as element')
}

function tracks () {
  return knex('music')
  .select('music.id')
}

function test () {
  return knex('music')
  .select('music.id')
}
