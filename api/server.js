const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const usersRouter = require('./users/users-router')
const postsRouter = require('./posts/posts-router')
const commentsRouter = require('./comments/comments-router')
const authRouter = require('./auth/auth-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/api/posts', postsRouter)
server.use('/api/comments', commentsRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'api up'
    })
})

server.get('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      custom: 'internal server error',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = server
