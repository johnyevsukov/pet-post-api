
exports.seed = function(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          {user_username: 'Winston',
          user_password: '2190f3e7e5e0bee2a21',
          user_email: 'winston@gmail.com',
          user_species: 'gerbil',
          user_birthday: '2019-06-01',
          user_location: 'Maryland'},

          {user_username: 'Boris',
          user_password: '2190f3e7e5e0bee2a21',
          user_email: 'borisisgreat@aol.com',
          user_species: 'gerbil',
          user_birthday: '2019-08-20',
          user_location: 'Maryland'},

          {user_username: 'Stanley',
          user_password: '2190f3e7e5e0bee2a21',
          user_email: 'stantheman@yahoo.com',
          user_species: 'gerbil',
          user_birthday: '2019-08-20',
          user_location: 'Maryland'},

          {user_username: 'Chonk',
          user_password: '2190f3e7e5e0bee2a21',
          user_email: 'chonkus@gmail.com',
          user_species: 'hamster',
          user_birthday: '2018-11-07',
          user_location: 'Maryland'},

          {user_username: 'Thunder',
          user_password: '2190f3e7e5e0bee2a21',
          user_email: 'leavemealone@live.com',
          user_species: 'leopard gecko',
          user_birthday: '2004-02-17',
          user_location: 'Maryland'},

          {user_username: 'Clementine',
          user_password: '2190f3e7e5e0bee2a21',
          user_email: 'clemmy@gmail.com',
          user_species: 'cat',
          user_birthday: '2013-01-01',
          user_location: 'Indiana'},

          {user_username: 'Milo',
          user_password: '2190f3e7e5e0bee2a21',
          user_email: 'borkwoof@live.com',
          user_species: 'dog',
          user_birthday: '2011-10-18',
          user_location: 'Maryland'},
        ]);
      });
  };