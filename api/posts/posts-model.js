const db = require('../data/db-config')


const getAll = () => {
    return db('posts as p')
    .select(
        'p.post_id',
        'p.post_text',
        'u.user_username')
    .join('users as u', 'p.user_id', 'u.user_id')
}

const getById = (id) => {
    return db('posts as p')
    .select(
        'p.post_id',
        'p.post_text',
        'u.user_username')
    .join('users as u', 'p.user_id', 'u.user_id')
    .where('post_id', id)
    .first()
}

const getBy = (filter) => {
    return db('posts')
    .where(filter)
    .first()
}

module.exports = {
    getAll,
    getById,
    getBy
}