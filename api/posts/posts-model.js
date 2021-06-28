const db = require('../data/db-config')


const getAll = () => {
    return db('posts as p')
    .select(
        'p.post_id',
        'p.post_text',
        'u.username')
    .join('users as u', 'p.user_id', 'u.user_id')
}

const getById = (id) => {
    return db('posts as p')
    .select(
        'p.post_id',
        'p.post_text',
        'u.username')
    .join('users as u', 'p.user_id', 'u.user_id')
    .where('post_id', id)
    .first()
}

const updateById = async (id, change) => {
    await db('posts')
    .where('post_id', id)
    .update(change)

    return getById(id)
}

const getByUserId = (id) => {
    return db('posts as p')
    .select(
        'p.post_id',
        'p.post_text',
        'u.username')
    .join('users as u', 'p.user_id', 'u.user_id')
    .where('p.user_id', id)
}

const getBy = (filter) => {
    return db('posts')
    .where(filter)
}

module.exports = {
    getAll,
    getById,
    getBy,
    getByUserId,
    updateById
}