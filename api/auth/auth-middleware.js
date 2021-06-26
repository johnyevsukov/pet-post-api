const { JWT_SECRET } = require('../secrets/index')
const jwt = require('jsonwebtoken')
const User = require('../users/users-model')

const restrict = (req, res, next) => {

 const token = req.headers.authorization
 if(token == undefined) {
   return next({ status: 401, message: 'token required' })
 }
 jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
   if (err) {
     next({ status: 401, message: 'invalid token' })
   }
   else {
     req.decodedToken = decodedToken
     next()
   }
 })
};

const checkBody = (req, res, next) => {
    if(req.body.username == undefined || req.body.password == undefined) {
        next({
            status: 400,
            message: 'username and password required'
        })
    }
    else {
        next()
    }
}

const checkUsernameFree = (req, res, next) => {
    User.getBy({ username: req.body.username })
    .then(user => {
        if(!user) {
            next()
        }
        else {
            next({
                status: 400,
                message: 'username taken'
                })
        }
    })
}

const checkUsernameExists = (req, res, next) => {
    User.getBy({ username: req.body.username })
    .then(user => {
        if(!user) {
            next({
                status: 400,
                message: 'invalid username'
            })
        }
        else {
            req.user = user
            next()
        }
    })
}

module.exports = {
  restrict,
  checkBody,
  checkUsernameFree,
  checkUsernameExists
}
