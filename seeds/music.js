exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('music').insert({id: 0, name: 'deep', artist: 'Adam Beyer'}),
        knex('music').insert({id: 1, name: 'dance', artist: 'Barack Obama'}),
        knex('music').insert({id: 2, name: 'down', artist: 'Chris Caines'}),
        knex('music').insert({id: 3, name: 'drive', artist: 'Dirk development'}),
        knex('music').insert({id: 4, name: 'drill', artist: 'Erin Errisistable'}),
        knex('music').insert({id: 5, name: 'drain', artist: 'Fred Frenzy'}),
        knex('music').insert({id: 6, name: 'destroy', artist: 'Gareth Gepper'}),
        knex('music').insert({id: 7, name: 'deedee', artist: 'Hans Hollow'}),
        knex('music').insert({id: 8, name: 'delay', artist: 'Im not a dj'}),
        knex('music').insert({id: 9, name: 'destiny', artist: 'Jackie Jazzie'})
      ]);
    });
};
