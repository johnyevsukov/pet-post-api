const db = require('../data/db-config')


const getAll = () => {
    return db('users')
}

const getById = (id) => {
    return db('users')
    .where('user_id', id)
    .first()
}

const getFollowersById = (id) => {
    return db('users as u', 'c.connection_id')
    .join('connections as c', 'c.following_id', 'u.user_id')
    .join('users as us', 'c.follower_id', 'us.user_id')
    .where('u.user_id', id)
}

const getFollowingById = (id) => {
    return db('users as u')
    .join('connections as c', 'c.follower_id', 'u.user_id')
    .join('users as us', 'c.following_id', 'us.user_id')
    .where('u.user_id', id)
}

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

const getBySearch = (user) => {
    return db('users')
    .where('username', 'ilike', `%${user.username}%`)
}

const getBy = (filter) => {
    return db('users')
    .where(filter)
    .first()
}

const followById = async (connection) => {
    await db('connections')
    .insert(connection)

    return getFollowersById(connection.following_id)
}

const unFollowById = async (connection) => {
    await db('connections')
    .where(connection)
    .del()

    return getFollowersById(connection.following_id)
}

const updateById = async (id, update) => {
    await db('users')
    .where('user_id', id)
    .update(update)

    return getById(id)
}

const insert = async (user) => {
    await db('users')
    .insert(user)

    return getBy({username: user.username})
}

const deleteById = (id) => {
    return db('users')
    .where('user_id', id)
    .del()
}

// const autoPopulate = (id) => {
//     return db('connections')
//     .insert({following_id: id, follower_id: 1})
//     .insert({following_id: id, follower_id: 2})
//     .insert({following_id: id, follower_id: 3})
//     .insert({following_id: id, follower_id: 4})
//     .insert({following_id: id, follower_id: 5})
//     .insert({following_id: id, follower_id: 6})
//     .insert({following_id: id, follower_id: 7})
//     .insert({following_id: id, follower_id: 8})
//     .insert({following_id: id, follower_id: 9})
//     .insert({following_id: id, follower_id: 10})
//     .insert({following_id: id, follower_id: 11})
//     .insert({following_id: id, follower_id: 12})
//     .insert({following_id: 1, follower_id: id})
//     .insert({following_id: 5, follower_id: id})
//     .insert({following_id: 9, follower_id: id})
//     .insert({following_id: 12, follower_id: id})
// }

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
