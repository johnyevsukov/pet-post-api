
exports.seed = function(knex) {
    return knex('connections').del()
      .then(function () {
        return knex('connections').insert([
          {follower_id: '1',
          following_id: '2'},

          {follower_id: '1',
          following_id: '3'},

          {follower_id: '1',
          following_id: '4'},

          {follower_id: '1',
          following_id: '5'},

          {follower_id: '2',
          following_id: '1'},

          {follower_id: '2',
          following_id: '3'},

          {follower_id: '3',
          following_id: '1'},

          {follower_id: '4',
          following_id: '2'},

          {follower_id: '7',
          following_id: '5'},
        ]);
      });
  };