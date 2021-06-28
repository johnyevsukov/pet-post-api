const db = require('../data/db-config')


const getAll = () => {
    return db('comments as c')
    .select(
        'c.comment_id',
        'c.post_id',
        'c.comment_text',
        'u.username')
    .join('users as u', 'c.user_id', 'u.user_id')
}

const getById = (id) => {
    return db('comments as c')
    .select(
        'c.comment_id',
        'c.post_id',
        'c.comment_text',
        'u.username')
    .join('users as u', 'c.user_id', 'u.user_id')
    .where('comment_id', id)
    .first()
}

const getByPostId = (id) => {
    return db('comments as c')
    .select(
        'c.comment_id',
        'c.post_id',
        'c.comment_text',
        'u.username')
    .join('users as u', 'c.user_id', 'u.user_id')
    .where('post_id', id)
}

const getBy = (filter) => {
    return db('comments')
    .where(filter)
    .first()
}

module.exports = {
    getAll,
    getById,
    getByPostId,
    getBy
}