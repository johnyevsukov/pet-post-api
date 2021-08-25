const router = require('express').Router()
const User = require('./users-model')
const { restrict } = require('../auth/auth-middleware')

/* 
   use auth restrict (token check)
   middleware on all endpoints
*/
router.use(restrict)

/* DELETE user account endpoint */
router.delete('/:id', (req, res, next) => {
    if(req.decodedToken.subject == req.params.id) {
        User.deleteById(req.params.id)
        .then(() => {
            res.status(200).json('user deleted')
        })
        .catch(next)
    }
    else {
        next({
            status: 403,
            message: 'you may delete only your account'
        })
    }
})

/* GET user info endpoint */
router.get('/:id', (req, res, next) => {
    User.getById(req.params.id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(next)
})

/* update user info PUT endpoint */
router.put('/:id', (req, res, next) => {
    User.updateById(req.params.id, req.body)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(next)
})

/* search bar POST endpoint */
router.post('/search', (req, res, next) => {
    User.getBySearch(req.body)
    .then(users => {
        res.status(200).json(users)
    })
    .catch(next)
})

/* GET user's following endpoint */
router.get('/:id/following', (req, res, next) => {
    User.getFollowingById(req.params.id)
    .then(following => {
        res.status(200).json(following)
    })
    .catch(next)
})

/* GET user's followers endpoint */
router.get('/:id/followers', (req, res, next) => {
    User.getFollowersById(req.params.id)
    .then(followers => {
        res.status(200).json(followers)
    })
    .catch(next)
})

/* GET user's posts endpoint */
router.get('/:id/posts', (req, res, next) => {
    User.getPostsById(req.params.id)
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(next)
})

/* follow a user POST endpoint */
router.post('/:id/follow', (req, res, next) => {
    const connection = {
        ...req.body,
        follower_id: req.params.id
    }
    User.followById(connection)
    .then(con => {
        res.status(200).json(con)
    })
    .catch(next)
})

/* unfollow a user DELETE endpoint */
router.delete('/:flr_id/unfollow/:flg_id', (req, res, next) => {
    User.unFollowById({
        follower_id: req.params.flr_id,
        following_id: req.params.flg_id
    })
    .then(con => {
        res.status(200).json(con)
    })
    .catch(next)
})

module.exports = router
