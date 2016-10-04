exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('music').insert({id: 22, name: 'deep', artist: 'Adam Beyer'}),
        knex('music').insert({id: 23, name: 'dance', artist: 'Barack Obama'}),
        knex('music').insert({id: 24, name: 'down', artist: 'Chris Caines'}),
        knex('music').insert({id: 25, name: 'drive', artist: 'Dirk development'}),
        knex('music').insert({id: 26, name: 'drill', artist: 'Erin Errisistable'}),
        knex('music').insert({id: 27, name: 'drain', artist: 'Fred Frenzy'}),
        knex('music').insert({id: 28, name: 'destroy', artist: 'Gareth Gepper'}),
        knex('music').insert({id: 29, name: 'deedee', artist: 'Hans Hollow'}),
        knex('music').insert({id: 30, name: 'delay', artist: 'Im not a dj'}),
        knex('music').insert({id: 31, name: 'destiny', artist: 'Jackie Jazzie'}),
        knex('music').insert({id: 32, name: 'wopple', artist: 'wizzle'}),
        knex('music').insert({id: 33, name: 'bopple', artist: 'wizzle'}),
        knex('music').insert({id: 34, name: 'delay', artist: 'Im not a dj'}),
        knex('music').insert({id: 35, name: 'destiny', artist: 'Jackie Jazzie'}),
        knex('music').insert({id: 36, name: 'boom', artist: 'wizzle'}),
        knex('music').insert({id: 37, name: 'bust', artist: 'wizzle'}),
        knex('music').insert({id: 38, name: 'destiny', artist: 'Jackie Jazzie'}),
        knex('music').insert({id: 39, name: 'groove', artist: 'wizzle'}),
        knex('music').insert({id: 40, name: 'moove', artist: 'wizzle'})

      ]);
    });
};
