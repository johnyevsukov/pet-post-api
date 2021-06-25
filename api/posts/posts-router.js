const router = require('express').Router()
const Post = require('./posts-model')


router.get('/', (req, res, next) => {
    Post.getAll()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Post.getById(req.params.id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(next)
})

module.exports = router