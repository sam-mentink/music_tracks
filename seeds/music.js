exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('music').insert({id: 22, name: 'archetype', artist: 'Adam Beyer'}),
        knex('music').insert({id: 23, name: 'beltram', artist: 'Barack Obama'}),
        knex('music').insert({id: 24, name: 'daxj', artist: 'Chris Caines'}),
        knex('music').insert({id: 25, name: 'dshake', artist: 'Dirk development'}),
        knex('music').insert({id: 26, name: 'dyad', artist: 'Erin Errisistable'}),
        knex('music').insert({id: 27, name: 'fenton', artist: 'Fred Frenzy'}),
        knex('music').insert({id: 28, name: 'hiroki', artist: 'Gareth Gepper'}),
        knex('music').insert({id: 29, name: 'leiras', artist: 'Hans Hollow'}),
        knex('music').insert({id: 30, name: 'midnight', artist: 'Im not a dj'}),
        knex('music').insert({id: 31, name: 'mills', artist: 'Jackie Jazzie'}),
        knex('music').insert({id: 32, name: 'randomer', artist: 'wizzle'}),
        knex('music').insert({id: 33, name: 'ritzi', artist: 'wizzle'}),
        knex('music').insert({id: 34, name: 'transhumans', artist: 'Im not a dj'}),
        knex('music').insert({id: 35, name: 'square', artist: 'Jackie Jazzie'}),
        knex('music').insert({id: 36, name: 'oscar', artist: 'wizzle'}),
        knex('music').insert({id: 37, name: 'mote', artist: 'wizzle'}),
        // knex('music').insert({id: 38, name: 'mord', artist: 'Jackie Jazzie'}),
        // knex('music').insert({id: 39, name: 'deep', artist: 'wizzle'}),
        // knex('music').insert({id: 40, name: 'leiras2', artist: 'wizzle'})
      ]);
    });
};
