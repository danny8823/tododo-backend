const asyncHandler = require('express-async-handler')
const Todo = require('../model/Todo')

const todoController = {
    fetch: asyncHandler(async(req,res) => {
        const {userId} = req.query
        try {
            const todo = await Todo.find({
                user: userId
            })

            if(!todo) {
                throw new Error('no todo')
            }

            res.json({
                todo
            })
        } catch(error) {
            res.json({
                error: error.message
            })
        }
    }),
    create: asyncHandler(async(req,res) => {
        const {task,description,user} = req.body

        if(!task || !description || !user) {
            throw new Error('Fill it all out')
        }

        try {   
            const todo = await Todo.create({
                task,
                description,
                user
            })

            res.json({
                message: 'success',
                todo
            })
        } catch (error) {
            res.json({
                error: error.message
            })
        }
    }),
    delete: asyncHandler(async(req,res) => {
        const {id} = req.body
        if(!id) {
            throw new Error('no id')
        }
        try {
            const todo = await Todo.findByIdAndDelete(id)
            res.json({
                message: 'Deleted',
                todo
            })
        } catch (error) {
            res.json({
                error: error.message
            })
        }
    })

}

module.exports = todoController