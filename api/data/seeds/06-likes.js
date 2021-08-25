exports.seed = function(knex) {
    return knex('likes').del()
      .then(function () {
        return knex('likes').insert([

       /* post_user: Winston 
          like_user: Boris */
          {post_id: 1,
          user_id: 2},

       /* post_user: Winston 
          like_user: Stanley */
          {post_id: 1,
          user_id: 3},

       /* post_user: Winston 
          like_user: Chonk */
          {post_id: 1,
          user_id: 4},

       /* post_user: Winston 
          like_user: Boris */
          {post_id: 2,
          user_id: 2},

       /* post_user: Winston 
          like_user: Stanley */
          {post_id: 2,
          user_id: 3},

       /* post_user: Boris 
          like_user: Milo */
          {post_id: 5,
          user_id: 7},

       /* post_user: Boris 
          like_user: Oinkus */
          {post_id: 5,
          user_id: 8},

       /* post_user: Stanley 
          like_user: Winston */
          {post_id: 6,
          user_id: 1},

       /* post_user: Stanley 
          like_user: Boris */
          {post_id: 6,
          user_id: 2},

       /* post_user: Stanley 
          like_user: Chonk */
          {post_id: 6,
          user_id: 4},

       /* post_user: Stanley 
          like_user: Thunder */
          {post_id: 6,
          user_id: 5},

       /* post_user: Stanley 
          like_user: Clementine */
          {post_id: 6,
          user_id: 6},

       /* post_user: Stanley 
          like_user: Milo */
          {post_id: 6,
          user_id: 7},

       /* post_user: Chonk 
          like_user: Winston */
          {post_id: 7,
          user_id: 1},

       /* post_user: Chonk 
          like_user: Boris */
          {post_id: 7,
          user_id: 2},

       /* post_user: Chonk 
          like_user: Wintson */
          {post_id: 8,
          user_id: 1},

       /* post_user: Chonk 
          like_user: Boris */
          {post_id: 8,
          user_id: 2},

       /* post_user: Chonk 
          like_user: Stanley */
          {post_id: 8,
          user_id: 3},

       /* post_user: Clementine 
          like_user: Winston */
          {post_id: 10,
          user_id: 1},

       /* post_user: Clementine 
          like_user: Bubbles */
          {post_id: 10,
          user_id: 9},

       /* post_user: Clementine 
          like_user: Milo */
          {post_id: 11,
          user_id: 7},

       /* post_user: Milo 
          like_user: Winston */
          {post_id: 12,
          user_id: 1},

       /* post_user: Milo 
          like_user: Boris */
          {post_id: 12,
          user_id: 2},

       /* post_user: Oinkus 
          like_user: Clementine */
          {post_id: 13,
          user_id: 6},

       /* post_user: Oinkus 
          like_user: Milo */
          {post_id: 13,
          user_id: 7},

       /* post_user: Oinkus 
          like_user: Winston */
          {post_id: 13,
          user_id: 1},

       /* post_user: Bubbles 
          like_user: Winston */
          {post_id: 15,
          user_id: 1},

       /* post_user: Spike 
          like_user: Boris */
          {post_id: 18,
          user_id: 2},

       /* post_user: Spike 
          like_user: Stanley */
          {post_id: 18,
          user_id: 3},

       /* post_user: Croaky 
          like_user: Winston */
          {post_id: 20,
          user_id: 1},

       /* post_user: Croaky 
          like_user: Winston */
          {post_id: 21,
          user_id: 1},

       /* post_user: Croaky 
          like_user: Stanley */
          {post_id: 21,
          user_id: 3},

       /* post_user: Croaky 
          like_user: Thunder */
          {post_id: 21,
          user_id: 5},

       /* post_user: Croaky 
          like_user: Milo */
          {post_id: 21,
          user_id: 7},

       /* post_user: Basil 
          like_user: Winston */
          {post_id: 22,
          user_id: 1},

       /* post_user: Basil 
          like_user: Boris */
          {post_id: 22,
          user_id: 2},

       /* post_user: Basil 
          like_user: Stanley */
          {post_id: 22,
          user_id: 3},

       /* post_user: Basil 
          like_user: Chonk */
          {post_id: 22,
          user_id: 4},

       /* post_user: Basil 
          like_user: Winston */
          {post_id: 25,
          user_id: 1},

       /* post_user: Basil 
          like_user: Boris */
          {post_id: 25,
          user_id: 2},

       /* post_user: Coco 
          like_user: Winston */
          {post_id: 26,
          user_id: 1},

        ]);
      });
  };
