const router = require('express').Router()
const Comment = require('./comments-model')


router.get('/', (req, res, next) => {
    Comment.getAll()
    .then(comments => {
        res.status(200).json(comments)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Comment.getById(req.params.id)
    .then(comment => {
        res.status(200).json(comment)
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Comment.deleteById(req.params.id)
    .then(comment => {
        res.status(200).json(comment)
    })
    .catch(next)
})

module.exports = router