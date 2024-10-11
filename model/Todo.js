const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: 'String',
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        description: {
            type: 'String',
            required: true
        }
    }
)

module.exports = mongoose.model('Todo', todoSchema)