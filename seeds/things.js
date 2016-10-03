exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('things').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('things').insert({id: 1, music_id: 22, element_id: 10}),
        knex('things').insert({id: 2, music_id: 23, element_id: 11}),
        knex('things').insert({id: 3, music_id: 24, element_id: 12}),
        knex('things').insert({id: 4, music_id: 24, element_id: 13}),
        knex('things').insert({id: 5, music_id: 25, element_id: 14}),
        knex('things').insert({id: 6, music_id: 26, element_id: 15}),
        knex('things').insert({id: 7, music_id: 27, element_id: 16}),
        knex('things').insert({id: 8, music_id: 28, element_id: 17}),
        knex('things').insert({id: 9, music_id: 29, element_id: 18}),
        knex('things').insert({id: 10, music_id: 30, element_id: 10}),
        knex('things').insert({id: 11, music_id: 31, element_id: 11}),
        knex('things').insert({id: 12, music_id: 23, element_id: 12}),
        knex('things').insert({id: 13, music_id: 23, element_id: 13}),
        knex('things').insert({id: 14, music_id: 24, element_id: 14}),
        knex('things').insert({id: 15, music_id: 25, element_id: 15}),
        knex('things').insert({id: 16, music_id: 26, element_id: 16}),
        knex('things').insert({id: 17, music_id: 27, element_id: 17}),
        knex('things').insert({id: 18, music_id: 27, element_id: 18}),
        knex('things').insert({id: 19, music_id: 25, element_id: 10}),
        knex('things').insert({id: 20, music_id: 24, element_id: 11}),
        knex('things').insert({id: 21, music_id: 24, element_id: 12}),
        knex('things').insert({id: 22, music_id: 26, element_id: 13}),
        knex('things').insert({id: 23, music_id: 27, element_id: 14}),
        knex('things').insert({id: 24, music_id: 22, element_id: 15}),
        knex('things').insert({id: 25, music_id: 30, element_id: 16}),
        knex('things').insert({id: 26, music_id: 30, element_id: 17})
      ]);
    });
};
