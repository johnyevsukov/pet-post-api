const router = require('express').Router()
const Post = require('./posts-model')
const Comment = require('../comments/comments-model')
const User = require('../users/users-model')
const { restrict } = require('../auth/auth-middleware')


router.use(restrict)

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

router.put('/:id', (req, res, next) => {
    Post.updateById(req.params.id, req.body)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Post.deleteById(req.params.id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(next)
})

router.get('/timeline/feed', async (req, res, next) => {
    try {
        const userPosts = await Post.getBy({ user_id: req.decodedToken.subject })
        const userFolling = await User.getFollowingById(req.decodedToken.subject)
        const followingPosts = await Promise.all(
            userFolling.map(following => {
                return Post.getBy({ user_id: following.user_id })
            })
        )
        res.json(userPosts.concat(...followingPosts))
    }
    catch(err) {
        next(err)
    }
})

router.get('/:id/comments', (req, res, next) => {
    Comment.getByPostId(req.params.id)
    .then(comments => {
        res.status(200).json(comments)
    })
    .catch(next)
})

router.post('/:id/comments', (req, res, next) => {
    const comment = { ...req.body, post_id: req.params.id }
    Comment.post(comment)
    .then(() => {
        res.status(200).json('success')
    })
    .catch(next)
})

module.exports = router