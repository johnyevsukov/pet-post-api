const db = require('../data/db-config')


const getAll = () => {
    return db('users')
}

const getById = (id) => {
    return db('users')
    .where('user_id', id)
    .first()
}

const getBy = (filter) => {
    return db('users')
    .where(filter)
    .first()
}

const insert = async (user) => {
    await db('users')
    .insert(user)

    return getBy({username: user.username})
}

module.exports = {
    getAll,
    getById,
    getBy,
    insert
}
