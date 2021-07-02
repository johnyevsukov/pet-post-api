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
    return db('posts')
    .where('user_id', id)
    .orderBy('created_at', 'desc')
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
    unFollowById
}
