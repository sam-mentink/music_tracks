
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tune_stuff').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tune_stuff').insert({id: 1, element: 'driving', element_id: 10}),
        knex('tune_stuff').insert({id: 2, element: 'deep', element_id: 11}),
        knex('tune_stuff').insert({id: 3, element: 'melodic', element_id: 12}),
        knex('tune_stuff').insert({id: 4, element: 'bridge', element_id: 13}),
        knex('tune_stuff').insert({id: 5, element: 'tech', element_id: 14}),
        knex('tune_stuff').insert({id: 6, element: 'ghetto', element_id: 15}),
        knex('tune_stuff').insert({id: 7, element: 'punk', element_id: 16}),
        knex('tune_stuff').insert({id: 8, element: 'main', element_id: 17}),
        knex('tune_stuff').insert({id: 9, element: 'morgan', element_id: 18})
      ]);
    });
};
