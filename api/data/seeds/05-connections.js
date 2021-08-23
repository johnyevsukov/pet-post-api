
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
// ------------------------------
          {follower_id: '5',
          following_id: '7'},

          {follower_id: '1',
          following_id: '8'},

          {follower_id: '1',
          following_id: '9'},

          {follower_id: '8',
          following_id: '1'},

          {follower_id: '8',
          following_id: '9'},

          {follower_id: '10',
          following_id: '11'},

          {follower_id: '10',
          following_id: '12'},

          {follower_id: '11',
          following_id: '10'},

          {follower_id: '9',
          following_id: '12'},

          {follower_id: '9',
          following_id: '11'},

          {follower_id: '9',
          following_id: '8'},

          {follower_id: '7',
          following_id: '1'},

          {follower_id: '6',
          following_id: '1'},

          {follower_id: '1',
          following_id: '6'},

          {follower_id: '8',
          following_id: '6'},
        ]);
      });
  };