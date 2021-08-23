
exports.seed = function(knex) {
    return knex('posts').del()
      .then(function () {
        return knex('posts').insert([
          {post_text: 'Loving my new enclosure',
          user_id: 1}, // 1

          {post_text: 'I like seeds',
          user_id: 1}, // 2

          {post_text: 'want chew toys',
          user_id: 1}, // 3

          {post_text: 'what is the meaning of life?',
          user_id: 2}, // 4

          {post_text: 'so sleepy',
          user_id: 2}, // 5

          {post_text: 'I am a one of a kind rodent',
          user_id: 3}, // 6

          {post_text: 'I love tubing!!!!!!!!',
          user_id: 4}, // 7

          {post_text: 'sweet potato for dinner',
          user_id: 4}, // 8

          {post_text: 'anyone got any crickets?',
          user_id: 5}, // 9

          {post_text: 'I like tuna fish',
          user_id: 6}, // 10

          {post_text: 'gonna take a nap soon',
          user_id: 6}, // 11

          {post_text: 'new dog in the house. not sure how I feel about him.',
          user_id: 7}, // 12

          {post_text: 'could sure go for a mud roll right about now..',
          user_id: 8}, // 13

          {post_text: 'anybody got any slop?',
          user_id: 8}, // 14

          {post_text: 'bloop.. bloop.. bloop',
          user_id: 9}, // 15

          {post_text: "I'm starting to think my world is pretty small... I've passed this castle 4 times already..",
          user_id: 9}, // 16

          {post_text: 'oh boy.. fish flakes for dinner.. what a surprise.',
          user_id: 9}, // 17

          {post_text: 'rock and ROOLLL!!',
          user_id: 10}, // 18

          {post_text: "don't stand too close to me..",
          user_id: 10}, // 19

          {post_text: 'Ribbit.',
          user_id: 11}, // 20

          {post_text: 'need moisture',
          user_id: 11}, // 21

          {post_text: 'SSSSssSSsssSssssssss',
          user_id: 12}, // 22

          {post_text: "having Winston the gerbil for dinner.. I I mean having Winston OVER for dinner..",
          user_id: 12}, // 23

          {post_text: 'just gotta slither on through life',
          user_id: 12}, // 24

          {post_text: "am I asleep? am I awake? who knows! my eyes don't close..",
          user_id: 12}, // 25

          {post_text: "had some nice seeds!",
          user_id: 13}, // 26

          {post_text: "in the words of a poet.. squawk squawk..",
          user_id: 13}, // 27

          {post_text: "Clementine the cat just followed me. should I be worried??",
          user_id: 13}, // 28
        ]);
      });
  };