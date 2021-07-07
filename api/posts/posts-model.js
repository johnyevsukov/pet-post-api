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
        'p.*',
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

const post = async (post) => {
    const [id] = await db('posts')
    .insert(post, 'post_id')
    return getById(id)
}

const deleteById = async (id) => {
    const deleted = await getById(id)
    await db('posts')
    .where('post_id', id)
    .del()

    return deleted
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
    return db('posts as p')
    .join('users as u', 'u.user_id', 'p.user_id')
    .where('p.user_id', filter.user_id)
}

module.exports = {
    getAll,
    getById,
    getBy,
    getByUserId,
    updateById,
    deleteById,
    post
}