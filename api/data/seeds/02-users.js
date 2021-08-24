exports.seed = function(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([

          /* user_id: 1 */
          {username: 'Winston',
          password: '$2a$08$z93ZSJTeyujfmh8ayog7I.6HpJP4cQFlhuKKW6xYLL8x5MCbfW9Wm',
          user_avatar: 'rodent',
          user_email: 'winston@gmail.com',
          user_species: 'gerbil',
          user_birthday: '2019-06-01',
          user_location: 'Maryland'},

          /* user_id: 2 */
          {username: 'Boris',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'rodent',
          user_email: 'borisisgreat@aol.com',
          user_species: 'gerbil',
          user_birthday: '2019-08-20',
          user_location: 'Maryland'},

          /* user_id: 3 */
          {username: 'Stanley',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'rodent',
          user_email: 'stantheman@yahoo.com',
          user_species: 'gerbil',
          user_birthday: '2019-08-20',
          user_location: 'Maryland'},

          /* user_id: 4 */
          {username: 'Chonk',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'hamster',
          user_email: 'chonkus@gmail.com',
          user_species: 'hamster',
          user_birthday: '2018-11-07',
          user_location: 'Maryland'},

          /* user_id: 5 */
          {username: 'Thunder',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'lizard',
          user_email: 'leavemealone@live.com',
          user_species: 'leopard gecko',
          user_birthday: '2004-02-17',
          user_location: 'Maryland'},

          /* user_id: 6 */
          {username: 'Clementine',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'cat',
          user_email: 'clemmy@gmail.com',
          user_species: 'cat',
          user_birthday: '2013-01-01',
          user_location: 'Indiana'},

          /* user_id: 7 */
          {username: 'Milo',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'dog',
          user_email: 'borkwoof@live.com',
          user_species: 'dog',
          user_birthday: '2011-10-18',
          user_location: 'Maryland'},

          /* user_id: 8 */
          {username: 'Oinkus',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'pig',
          user_email: 'snortsnort@live.com',
          user_species: 'pig',
          user_birthday: '2011-08-18',
          user_location: 'Kansas'},

          /* user_id: 9 */
          {username: 'Bubbles',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'fish',
          user_email: 'bloop@live.com',
          user_species: 'goldfish',
          user_birthday: '2019-01-09',
          user_location: 'California'},

          /* user_id: 10 */
          {username: 'Spike',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'hedgehog',
          user_email: 'spikey@gmail.com',
          user_species: 'hedgehog',
          user_birthday: '2018-07-01',
          user_location: 'Maine'},

          /* user_id: 11 */
          {username: 'Croaky',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'frog',
          user_email: 'ribbit@gmail.com',
          user_species: 'frog',
          user_birthday: '2021-01-02',
          user_location: 'Virginia'},

          /* user_id: 12 */
          {username: 'Basil',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'snake',
          user_email: 'ssssss@aol.com',
          user_species: 'garden snake',
          user_birthday: '2021-01-02',
          user_location: 'Virginia'},

          /* user_id: 13 */
          {username: 'Coco',
          password: '2190f3e7e5e0bee2a21',
          user_avatar: 'bird',
          user_email: 'coooo@live.com',
          user_species: 'parakeet',
          user_birthday: '2020-01-01',
          user_location: 'North Dakota'}

        ]);
      });
  };
