
exports.seed = function(knex) {
    return knex('posts').del()
      .then(function () {
        return knex('posts').insert([
          {post_text: 'Loving my new bin',
          user_id: 1},

          {post_text: 'I like seeds',
          user_id: 1},

          {post_text: 'want chew toys',
          user_id: 1},

          {post_text: 'what is the meaning of life?',
          user_id: 2},

          {post_text: 'so sleepy',
          user_id: 2},

          {post_text: 'I am a one of a kind rodent',
          user_id: 3},

          {post_text: 'I love tubing!!!!!!!!',
          user_id: 4},

          {post_text: 'sweet potato for dinner',
          user_id: 4},

          {post_text: 'anyone got any crickets?',
          user_id: 5},

          {post_text: 'I like tuna fish',
          user_id: 6},

          {post_text: 'gonna take a nap soon',
          user_id: 6},

          {post_text: 'new dog in the house. not sure how I feel about him.',
          user_id: 7},

          {post_text: 'am I going for a WALK? OUTSIDE? OH BOY!',
          user_id: 7},
        ]);
      });
  };