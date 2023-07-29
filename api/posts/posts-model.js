const db = require("../data/db-config");

/* get all posts in posts table */
const getAll = () => {
  return db("posts as p")
    .select("p.post_id", "p.post_text", "u.username")
    .join("users as u", "p.user_id", "u.user_id");
};

/* get post by id */
const getById = (id) => {
  return db("posts as p")
    .select("p.*", "u.username")
    .join("users as u", "p.user_id", "u.user_id")
    .where("post_id", id)
    .first();
};

/* update post by id */
const updateById = async (id, change) => {
  await db("posts").where("post_id", id).update(change);

  return getById(id);
};

/* create new post in posts table */
const post = async (post) => {
  const [id] = await db("posts").insert(post, "post_id");
  return getById(id);
};

/* delete post by id */
const deleteById = async (id) => {
  const deleted = await getById(id);
  await db("posts").where("post_id", id).del();

  return deleted;
};

/* get user's posts by user_id */
const getByUserId = (id) => {
  return db("posts as p")
    .select("p.post_id", "p.created_at", "p.post_text", "u.username")
    .join("users as u", "p.user_id", "u.user_id")
    .where("p.user_id", id);
};

/* get posts by desired filter */
const getBy = (filter) => {
  return db("posts as p")
    .select(
      "p.post_id",
      "p.created_at",
      "p.post_text",
      "p.user_id",
      "u.username"
    )
    .join("users as u", "p.user_id", "u.user_id")
    .where("p.user_id", filter.user_id)
    .orderBy("p.created_at", "desc");
};

/* 
    big chungus query for getting
    user's timeline feed posts
    (i.e. posts of users they are
    following)

    -  _posts  -
    +--------------------------------------------+
    |  (select all posts of following users)     |
    |        *                                   |
    |        |                                   |
    |        +--union--+                         |
    |                  |                         |
    |                  *                         |
    |  (select all posts of the logged in user)  |
    +--------------------------------------------+
                *
                |
        (select all from _posts
        and order by time created)
                |
                *   
    +----------------------------+
    |                            |
    |  nicely formatted data :)  |
    |                            |
    +----------------------------+
*/
const getTimelinePosts = (id) => {
  return db
    .with(
      "_posts",
      db.raw(
        `select p.*, us.username, us.user_avatar from users as u\
        join connections as c\
        on u.user_id = c.follower_id\
        join posts as p\
        on p.user_id = c.following_id\
        join users as us\
        on p.user_id = us.user_id\
        where u.user_id = ${id}\
        union\
        select po.*, usr.username from posts as po\
        join users as usr\
        on po.user_id = usr.user_id\
        where po.user_id = ${id}`
      )
    )
    .select("*")
    .from("_posts as p")
    .orderBy("p.created_at", "desc");
};

module.exports = {
  getAll,
  getById,
  getBy,
  getByUserId,
  updateById,
  deleteById,
  post,
  getTimelinePosts,
};
