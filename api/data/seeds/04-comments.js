exports.seed = function(knex) {
    return knex('comments').del()
      .then(function () {
        return knex('comments').insert([

       /* comment_id: 1
          post_user: Winston 
          comment_user: Boris */
          {comment_text: 'congrats on the enclosure!',
          post_id: 1,
          user_id: 2},

       /* comment_id: 2
          post_user: Winston 
          comment_user: Stanley */
          {comment_text: 'congrats buddy!',
          post_id: 1,
          user_id: 3},

       /* comment_id: 3
          post_user: Winston 
          comment_user: Chonk */
          {comment_text: 'oh man same',
          post_id: 2,
          user_id: 4},

       /* comment_id: 4
          post_user: Boris 
          comment_user: Thunder */
          {comment_text: 'dont think about it',
          post_id: 4,
          user_id: 5},

       /* comment_id: 5
          post_user: Stanley 
          comment_user: Boris */
          {comment_text: 'Yeah you are, Stan!',
          post_id: 6,
          user_id: 2},

       /* comment_id: 6
          post_user: Stanley 
          comment_user: Chonk */
          {comment_text: 'love ya bud',
          post_id: 6,
          user_id: 4},

       /* comment_id: 7
          post_user: Chonk 
          comment_user: Winston */
          {comment_text: 'ooohhhhh',
          post_id: 8,
          user_id: 1},

       /* comment_id: 8
          post_user: Thunder 
          comment_user: Milo */
          {comment_text: 'nah sorry :/',
          post_id: 9,
          user_id: 7},

       /* comment_id: 9
          post_user: Clementine 
          comment_user: Milo */
          {comment_text: 'same clem',
          post_id: 11,
          user_id: 7},

       /* comment_id: 10
          post_user: Milo 
          comment_user: Clementine */
          {comment_text: 'oof sorry .-.',
          post_id: 12,
          user_id: 6},

       /* comment_id: 11
          post_user: Milo 
          comment_user: Stanley */
          {comment_text: 'I think hes alright',
          post_id: 12,
          user_id: 3},

       /* comment_id: 12
          post_user: Oinkus 
          comment_user: Croaky */
          {comment_text: 'ohhh the moisturrree',
          post_id: 13,
          user_id: 11},

       /* comment_id: 13
          post_user: Oinkus 
          comment_user: Clementine */
          {comment_text: 'gross..',
          post_id: 13,
          user_id: 6},

       /* comment_id: 14
          post_user: Bubbles 
          comment_user: Spike */
          {comment_text: '???',
          post_id: 15,
          user_id: 10},

       /* comment_id: 15
          post_user: Bubbles 
          comment_user: Basil */
          {comment_text: "don't complain",
          post_id: 17,
          user_id: 12},

       /* comment_id: 16
          post_user: Basil 
          comment_user: Winston */
          {comment_text: 'yikes!!',
          post_id: 22,
          user_id: 1},

       /* comment_id: 17
          post_user: Basil 
          comment_user: Boris */
          {comment_text: 'run!',
          post_id: 22,
          user_id: 2},

       /* comment_id: 18
          post_user: Basil 
          comment_user: Stanley */
          {comment_text: '.-.',
          post_id: 22,
          user_id: 3},

       /* comment_id: 19
          post_user: Basil 
          comment_user: Winston */
          {comment_text: '.........',
          post_id: 23,
          user_id: 1},

       /* comment_id: 20
          post_user: Basil 
          comment_user: Thunder */
          {comment_text: "that's the right attitude buddy!",
          post_id: 24,
          user_id: 5},

       /* comment_id: 21
          post_user: Basil 
          comment_user: Croaky */
          {comment_text: 'heck yeah dude',
          post_id: 24,
          user_id: 11},

       /* comment_id: 22
          post_user: Spike 
          comment_user: Chonk */
          {comment_text: 'WOO!!',
          post_id: 18,
          user_id: 4},

       /* comment_id: 23
          post_user: Bubbles 
          comment_user: Stanley */
          {comment_text: "umm.. don't know how to break this to you..",
          post_id: 16,
          user_id: 3},

       /* comment_id: 24
          post_user: Bubbles 
          comment_user: Boris */
          {comment_text: 'bro..we all live in enclosures..',
          post_id: 16,
          user_id: 2},

       /* comment_id: 25
          post_user: Coco 
          comment_user: Clementine */
          {comment_text: 'yes. yes you should.',
          post_id: 28,
          user_id: 6}

        ]);
      });
  };
