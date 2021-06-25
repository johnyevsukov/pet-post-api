const router = require('express').Router()
const Post = require('./posts-model')
const Comment = require('../comments/comments-model')


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

router.get('/:id/comments', (req, res, next) => {
    Comment.getByPostId(req.params.id)
    .then(comments => {
        res.status(200).json(comments)
    })
    .catch(next)
})

module.exports = router