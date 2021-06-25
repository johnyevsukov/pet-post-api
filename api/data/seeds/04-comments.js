
exports.seed = function(knex) {
    return knex('comments').del()
      .then(function () {
        return knex('comments').insert([
          {comment_text: 'congrats on the bin!',
          post_id: 1,
          user_id: 2},

          {comment_text: 'congrats buddy!',
          post_id: 1,
          user_id: 3},

          {comment_text: 'oh man same',
          post_id: 2,
          user_id: 4},

          {comment_text: 'dont think about it',
          post_id: 4,
          user_id: 5},

          {comment_text: 'Yeah you are, Stan!',
          post_id: 6,
          user_id: 2},

          {comment_text: 'love ya bud',
          post_id: 6,
          user_id: 4},

          {comment_text: 'ooohhhhh',
          post_id: 8,
          user_id: 1},

          {comment_text: 'nah sorry :/',
          post_id: 9,
          user_id: 7},

          {comment_text: 'same clem',
          post_id: 11,
          user_id: 7},

          {comment_text: 'oof sorry .-.',
          post_id: 12,
          user_id: 6},

          {comment_text: 'I think hes alright',
          post_id: 12,
          user_id: 3}
        ]);
      });
  };