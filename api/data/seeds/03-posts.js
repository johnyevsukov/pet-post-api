exports.seed = function(knex) {
    return knex('posts').del()
      .then(function () {
        return knex('posts').insert([

          /* post_id: 1 | user: Winston */
          {post_text: 'Loving my new enclosure',
          user_id: 1},

          /* post_id: 2 | user: Winston */
          {post_text: 'I like seeds',
          user_id: 1},

          /* post_id: 3 | user: Winston */
          {post_text: 'want chew toys',
          user_id: 1},

          /* post_id: 4 | user: Boris */
          {post_text: 'what is the meaning of life?',
          user_id: 2},

          /* post_id: 5 | user: Boris */
          {post_text: 'so sleepy',
          user_id: 2},

          /* post_id: 6 | user: Stanley */
          {post_text: 'I am a one of a kind rodent',
          user_id: 3},

          /* post_id: 7 | user: Chonk */
          {post_text: 'I love tubing!!!!!!!!',
          user_id: 4},

          /* post_id: 8 | user: Chonk */
          {post_text: 'sweet potato for dinner',
          user_id: 4},

          /* post_id: 9 | user: Thunder */
          {post_text: 'anyone got any crickets?',
          user_id: 5},

          /* post_id: 10 | user: Clementine */
          {post_text: 'I like tuna fish',
          user_id: 6},

          /* post_id: 11 | user: Clementine */
          {post_text: 'gonna take a nap soon',
          user_id: 6},

          /* post_id: 12 | user: Milo */
          {post_text: 'new dog in the house. not sure how I feel about him.',
          user_id: 7},

          /* post_id: 13 | user: Oinkus */
          {post_text: 'could sure go for a mud roll right about now..',
          user_id: 8},

          /* post_id: 14 | user: Oinkus */
          {post_text: 'anybody got any slop?',
          user_id: 8},

          /* post_id: 15 | user: Bubbles */
          {post_text: 'bloop.. bloop.. bloop',
          user_id: 9},

          /* post_id: 16 | user: Bubbles */
          {post_text: "I'm starting to think my world is pretty small... I've passed this castle 4 times already..",
          user_id: 9},

          /* post_id: 17 | user: Bubbles */
          {post_text: 'oh boy.. fish flakes for dinner.. what a surprise.',
          user_id: 9},

          /* post_id: 18 | user: Spike */
          {post_text: 'rock and ROOLLL!!',
          user_id: 10},

          /* post_id: 19 | user: Spike */
          {post_text: "don't stand too close to me..",
          user_id: 10},

          /* post_id: 20 | user: Croaky */
          {post_text: 'Ribbit.',
          user_id: 11},

          /* post_id: 21 | user: Croaky */
          {post_text: 'need moisture',
          user_id: 11},

          /* post_id: 22 | user: Basil */
          {post_text: 'SSSSssSSsssSssssssss',
          user_id: 12},

          /* post_id: 23 | user: Basil */
          {post_text: "having Winston the gerbil for dinner.. I I mean having Winston OVER for dinner..",
          user_id: 12},

          /* post_id: 24 | user: Basil */
          {post_text: 'just gotta slither on through life',
          user_id: 12},

          /* post_id: 25 | user: Basil */
          {post_text: "am I asleep? am I awake? who knows! my eyes don't close..",
          user_id: 12},

          /* post_id: 26 | user: Coco */
          {post_text: "had some nice seeds!",
          user_id: 13},

          /* post_id: 27 | user: Coco */
          {post_text: "in the words of a poet.. squawk squawk..",
          user_id: 13},

          /* post_id: 28 | user: Coco */
          {post_text: "Clementine the cat just followed me. should I be worried??",
          user_id: 13}

        ]);
      });
  };
  