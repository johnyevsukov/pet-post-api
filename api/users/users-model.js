const db = require('../data/db-config')

/* get all users in users table */
const getAll = () => {
    return db('users')
}

/* get user by id */
const getById = (id) => {
    return db('users')
    .where('user_id', id)
    .first()
}

/* get user's followers by id */
const getFollowersById = (id) => {
    return db('users as u', 'c.connection_id')
    .join('connections as c', 'c.following_id', 'u.user_id')
    .join('users as us', 'c.follower_id', 'us.user_id')
    .where('u.user_id', id)
}

/* get user's following by id */
const getFollowingById = (id) => {
    return db('users as u')
    .join('connections as c', 'c.follower_id', 'u.user_id')
    .join('users as us', 'c.following_id', 'us.user_id')
    .where('u.user_id', id)
}

/* get user's posts by id */
const getPostsById = (id) => {
    return db('posts as p')
    .select(
        'p.post_id',
        'p.created_at',
        'p.post_text',
        'p.user_id',
        'u.username')
    .join('users as u', 'p.user_id', 'u.user_id')
    .where('p.user_id', id)
    .orderBy('p.created_at', 'desc')
}

/* 
    get users by string match (ilike)
   (for search bar)
*/
const getBySearch = (user) => {
    return db('users')
    .where('username', 'ilike', `%${user.username}%`)
}

/* get user by desired filter */
const getBy = (filter) => {
    return db('users')
    .where(filter)
    .first()
}

/* 
    follow user by follower_id
    (logged in user) / following_id
*/
const followById = async (connection) => {
    await db('connections')
    .insert(connection)

    return getFollowersById(connection.following_id)
}

/* 
    unfollow user by follower_id
    (logged in user) / following_id
*/
const unFollowById = async (connection) => {
    await db('connections')
    .where(connection)
    .del()

    return getFollowersById(connection.following_id)
}

/* update user info by id */
const updateById = async (id, update) => {
    await db('users')
    .where('user_id', id)
    .update(update)

    return getById(id)
}

/* create new user (following signup)) */
const insert = async (user) => {
    await db('users')
    .insert(user)

    return getBy({username: user.username})
}

/* delete user by id */
const deleteById = (id) => {
    return db('users')
    .where('user_id', id)
    .del()
}

module.exports = {
    getAll,
    getById,
    getBy,
    insert,
    deleteById,
    getFollowingById,
    getFollowersById,
    getPostsById,
    followById,
    unFollowById,
    updateById,
    getBySearch
}
