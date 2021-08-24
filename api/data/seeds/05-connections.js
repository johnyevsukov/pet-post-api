exports.seed = function(knex) {
    return knex('connections').del()
      .then(function () {
        return knex('connections').insert([

          /* Winston follows Boris */
          {follower_id: '1',
          following_id: '2'},

          /* Winston follows Stanley */
          {follower_id: '1',
          following_id: '3'},

          /* Winston follows Chonk */
          {follower_id: '1',
          following_id: '4'},

          /* Winston follows Thunder */
          {follower_id: '1',
          following_id: '5'},

          /* Boris follows Winston */
          {follower_id: '2',
          following_id: '1'},

          /* Boris follows Stanley */
          {follower_id: '2',
          following_id: '3'},

          /* Stanley follows Winston */
          {follower_id: '3',
          following_id: '1'},

          /* Chonk follows Boris */
          {follower_id: '4',
          following_id: '2'},

          /* Milo follows Thunder */
          {follower_id: '7',
          following_id: '5'},

          /* Thunder follows Milo */
          {follower_id: '5',
          following_id: '7'},

          /* Winston follows Oinkus */
          {follower_id: '1',
          following_id: '8'},

          /* Winston follows Bubbles */
          {follower_id: '1',
          following_id: '9'},

          /* Oinkus follows Winston */
          {follower_id: '8',
          following_id: '1'},

          /* Oinkus follows Bubbles */
          {follower_id: '8',
          following_id: '9'},

          /* Spike follows Croaky */
          {follower_id: '10',
          following_id: '11'},

          /* Spike follows Basil */
          {follower_id: '10',
          following_id: '12'},

          /* Croaky follows Spike */
          {follower_id: '11',
          following_id: '10'},

          /* Bubbles follows Basil */
          {follower_id: '9',
          following_id: '12'},

          /* Bubbles follows Croaky */
          {follower_id: '9',
          following_id: '11'},

          /* Bubbles follows Oinkus */
          {follower_id: '9',
          following_id: '8'},

          /* Milo follows Winston */
          {follower_id: '7',
          following_id: '1'},

          /* Clementine follows Winston */
          {follower_id: '6',
          following_id: '1'},

          /* Winston follows Clementine */
          {follower_id: '1',
          following_id: '6'},

          /* Oinkus follows Clementine */
          {follower_id: '8',
          following_id: '6'},

          /* Spike follows Bubbles */
          {follower_id: '10',
          following_id: '9'},

          /* Chonk follows Oinkus */
          {follower_id: '4',
          following_id: '8'}

        ]);
      });
  };
  