exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('music').insert({id: 0, music_id: 22, name: 'deep', artist: 'Adam Beyer'}),
        knex('music').insert({id: 1, music_id: 23, name: 'dance', artist: 'Barack Obama'}),
        knex('music').insert({id: 2, music_id: 24, name: 'down', artist: 'Chris Caines'}),
        knex('music').insert({id: 3, music_id: 25, name: 'drive', artist: 'Dirk development'}),
        knex('music').insert({id: 4, music_id: 26, name: 'drill', artist: 'Erin Errisistable'}),
        knex('music').insert({id: 5, music_id: 27, name: 'drain', artist: 'Fred Frenzy'}),
        knex('music').insert({id: 6, music_id: 28, name: 'destroy', artist: 'Gareth Gepper'}),
        knex('music').insert({id: 7, music_id: 29, name: 'deedee', artist: 'Hans Hollow'}),
        knex('music').insert({id: 8, music_id: 30, name: 'delay', artist: 'Im not a dj'}),
        knex('music').insert({id: 9, music_id: 31, name: 'destiny', artist: 'Jackie Jazzie'})
      ]);
    });
};
