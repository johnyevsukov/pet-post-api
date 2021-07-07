const db = require('../data/db-config')


const getByPostId = (id) => {
    return db('likes')
    .where('post_id', id)
}

const post = async (like) => {
    const [id] = await db('likes')
    .insert(like, 'post_id')
    return getByPostId(id)
}

const unlikeById = async (like) => {
    await db('likes')
    .where(like)
    .del()

    return getByPostId(like.post_id)
}

module.exports = {
    getByPostId,
    post,
    unlikeById
}