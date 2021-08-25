const db = require('../data/db-config')

/* get post's likes by post_id */
const getByPostId = (id) => {
    return db('likes')
    .where('post_id', id)
}

/* like post by post_id */
const post = async (like) => {
    const [id] = await db('likes')
    .insert(like, 'post_id')
    return getByPostId(id)
}

/* like post by post_id */
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
