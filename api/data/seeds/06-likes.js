exports.seed = function(knex) {
    return knex('likes').del()
      .then(function () {
        return knex('likes').insert([

          {post_id: 1,
          user_id: 2},

          {post_id: 1,
          user_id: 3},

          {post_id: 1,
          user_id: 4},

          {post_id: 2,
          user_id: 2},

          {post_id: 2,
          user_id: 3},

          {post_id: 5,
          user_id: 7},

          {post_id: 5,
          user_id: 8},

          {post_id: 6,
          user_id: 1},

          {post_id: 6,
          user_id: 2},

          {post_id: 6,
          user_id: 4},

          {post_id: 6,
          user_id: 5},

          {post_id: 6,
          user_id: 6},

          {post_id: 6,
          user_id: 7},

          {post_id: 7,
          user_id: 1},

          {post_id: 7,
          user_id: 2},

          {post_id: 8,
          user_id: 1},

          {post_id: 8,
          user_id: 2},

          {post_id: 8,
          user_id: 3},

          {post_id: 10,
          user_id: 1},

          {post_id: 10,
          user_id: 9},

          {post_id: 11,
          user_id: 7},

          {post_id: 12,
          user_id: 1},

          {post_id: 12,
          user_id: 2},

          {post_id: 13,
          user_id: 6},

          {post_id: 13,
          user_id: 7},

          {post_id: 13,
          user_id: 1},

          {post_id: 15,
          user_id: 1},

          {post_id: 18,
          user_id: 2},

          {post_id: 18,
          user_id: 3},

          {post_id: 20,
          user_id: 1},

          {post_id: 21,
          user_id: 1},

          {post_id: 21,
          user_id: 3},

          {post_id: 21,
          user_id: 5},

          {post_id: 21,
          user_id: 7},

          {post_id: 22,
          user_id: 1},

          {post_id: 22,
          user_id: 2},

          {post_id: 22,
          user_id: 3},

          {post_id: 22,
          user_id: 4},

          {post_id: 25,
          user_id: 1},

          {post_id: 25,
          user_id: 2},

          {post_id: 26,
          user_id: 1},

        ]);
      });
  };
