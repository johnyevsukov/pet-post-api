
exports.seed = function(knex) {
    return knex('comments').del()
      .then(function () {
        return knex('comments').insert([
          {comment_text: 'congrats on the enclosure!',
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
          user_id: 3},
          
          {comment_text: 'ohhh the moisturrree',
          post_id: 13,
          user_id: 11},

          {comment_text: 'gross..',
          post_id: 13,
          user_id: 6},

          {comment_text: '???',
          post_id: 15,
          user_id: 10},

          {comment_text: "don't complain",
          post_id: 17,
          user_id: 12},

          {comment_text: 'yikes!!',
          post_id: 22,
          user_id: 1},

          {comment_text: 'run!',
          post_id: 22,
          user_id: 2},

          {comment_text: '.-.',
          post_id: 22,
          user_id: 3},

          {comment_text: 'I think hes alright',
          post_id: 12,
          user_id: 3},

          {comment_text: '.........',
          post_id: 23,
          user_id: 1},

          {comment_text: "that's the right attitude buddy!",
          post_id: 24,
          user_id: 5},

          {comment_text: 'heck yeah dude',
          post_id: 24,
          user_id: 11},

          {comment_text: 'WOO!!',
          post_id: 18,
          user_id: 4},

          {comment_text: "umm.. don't know how to break this to you..",
          post_id: 16,
          user_id: 3},

          {comment_text: 'bro..we all live in enclosures..',
          post_id: 16,
          user_id: 2},

          {comment_text: 'yes. yes you should.',
          post_id: 28,
          user_id: 6}
        ]);
      });
  };