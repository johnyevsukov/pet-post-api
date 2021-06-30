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
        'u.username',
        'c.user_id')
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
        'u.username',
        'c.user_id')
    .join('users as u', 'c.user_id', 'u.user_id')
    .where('post_id', id)
}

const post = async (comment) => {
    const [id] = await db('comments')
    .insert(comment, 'comment_id')
    return getById(id)
}

const updateById = async (id, change) => {
    await db('comments')
    .where('comment_id', id)
    .update(change)

    return getById(id)
}

const deleteById = async (id) => {
    const deleted = await getById(id)
    await db('comments')
    .where('comment_id', id)
    .del()

    return deleted
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
    getBy,
    post,
    deleteById,
    updateById
}
