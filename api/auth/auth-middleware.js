const { JWT_SECRET } = require('../secrets/index')
const jwt = require('jsonwebtoken')
const User = require('../users/users-model')

/* simple restrict user authorization middleware */
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


/* simple body format check middleware */
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

/* 
    check if username is already taken middleware
    (for signup)
*/
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

/* 
    check if username is exists middleware
    (for login)
*/
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
