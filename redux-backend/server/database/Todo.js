const {Schema, model} = require ('mongoose')

const todoSchema = new Schema({
    body: String,
    status: {
      type: Boolean,
      default: false
    }
})

const Todo = model('Todo', todoSchema)

module.exports = Todo
