const router = require('express').Router()
const Post = require('./posts-model')
const Comment = require('../comments/comments-model')
const Like = require('../likes/likes-model')
const { restrict } = require('../auth/auth-middleware')

/* 
   use auth restrict (token check)
   middleware on all endpoints
*/
router.use(restrict)

/* GET post by post_id endpoint */
router.get('/:id', (req, res, next) => {
    Post.getById(req.params.id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(next)
})

/* POST new post enpoint */
router.post('/', (req, res, next) => {
    Post.post({
        ...req.body,
        user_id: req.decodedToken.subject
    })
    .then(post => {
        res.status(200).json(post)
    })
    .catch(next)
})

/* update post by post_id PUT endpoint */
router.put('/:id', (req, res, next) => {
    Post.updateById(req.params.id, req.body)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(next)
})

/* DELETE post by post_id enpoint */
router.delete('/:id', (req, res, next) => {
    Post.deleteById(req.params.id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(next)
})

/* 
    GET user's timeline post feed
    by user_id (extracted from token)
    endpoint
*/
router.get('/timeline/feed', (req, res, next) => {
    Post.getTimelinePosts(req.decodedToken.subject)
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(next)
})

/* GET post's comments by post_id endpoint */
router.get('/:id/comments', (req, res, next) => {
    Comment.getByPostId(req.params.id)
    .then(comments => {
        res.status(200).json(comments)
    })
    .catch(next)
})

/* POST new comment on post by post_id endpoint */
router.post('/:id/comments', (req, res, next) => {
    const comment = { ...req.body, post_id: req.params.id }
    Comment.post(comment)
    .then(comment => {
        res.status(200).json(comment)
    })
    .catch(next)
})

/* like a post by post_id POST endpoint */
router.post('/:id/likes', (req, res, next) => {
    const like = { ...req.body, post_id: req.params.id }
    Like.post(like)
    .then(likes => {
        res.status(200).json(likes)
    })
    .catch(next)
})

/* GET post's likes by post_id */
router.get('/:id/likes', (req, res, next) => {
    Like.getByPostId(req.params.id)
    .then(likes => {
        res.status(200).json(likes)
    })
    .catch(next)
})

/* unlike a post by post_id DELETE endpoint */
router.delete('/:usr_id/unlike/:pst_id', (req, res, next) => {
    Like.unlikeById({
        user_id: req.params.usr_id,
        post_id: req.params.pst_id
    })
    .then(likes => {
        res.status(200).json(likes)
    })
    .catch(next)
})

module.exports = router
