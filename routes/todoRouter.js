const express = require('express')
const todoController = require('../controller/todoController')
const todoRouter = express.Router()

todoRouter.post('/api/todos/create', todoController.create)
todoRouter.get('/api/todos/fetch', todoController.fetch)
todoRouter.delete('/api/todos/delete', todoController.delete)

module.exports = todoRouter