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
        knex('things').insert({id: 26, music_id: 30, element_id: 17}),
        knex('things').insert({id: 27, music_id: 32, element_id: 11}),
        knex('things').insert({id: 28, music_id: 33, element_id: 12}),
        knex('things').insert({id: 29, music_id: 33, element_id: 13}),
        knex('things').insert({id: 30, music_id: 34, element_id: 14}),
        knex('things').insert({id: 31, music_id: 35, element_id: 15}),
        knex('things').insert({id: 32, music_id: 36, element_id: 16}),
        knex('things').insert({id: 33, music_id: 37, element_id: 17}),
        knex('things').insert({id: 34, music_id: 38, element_id: 14}),
        knex('things').insert({id: 35, music_id: 39, element_id: 15}),
        knex('things').insert({id: 36, music_id: 40, element_id: 16}),
        knex('things').insert({id: 37, music_id: 38, element_id: 17}),
        knex('things').insert({id: 38, music_id: 37, element_id: 14}),
        knex('things').insert({id: 39, music_id: 35, element_id: 15}),
        knex('things').insert({id: 40, music_id: 32, element_id: 16}),
        knex('things').insert({id: 41, music_id: 31, element_id: 17}),
      ]);
    });
};
