const router = require('express').Router()
const User = require('./users-model')


router.get('/', (req, res, next) => {
    User.getAll()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    User.getById(req.params.id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(next)
})

module.exports = router
