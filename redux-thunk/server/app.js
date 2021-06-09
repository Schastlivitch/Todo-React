const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./database/Todo')

const app = express()
const port = 3100
const dbPath = 'mongodb://localhost:27017/backendtodo'
const dbOptions = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}

app.use(express.json())
app.use(cors())

// Получение всех todos
app.get('/todos', async (req, res) => {
  const allTodos = await Todo.find()
  return res.send(allTodos)
})

// Добавление нового todo (Нужно отправить экземпляр на фронт для получения там id)
app.post('/todos', async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body)
    return res.json(newTodo).status(200)
  } catch (err) {
    return res.sendStatus(400)
  }
})

// Удаление todo 
app.delete('/todos/:id', async (req, res) => {
  try {
    const currentTodo = await Todo.findByIdAndDelete(req.params.id)
    return res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400)
  }
})

// Изменение статуса todo 
app.put('/todos/:id', async (req, res) => {
  try {
    const currentTodo = await Todo.findById(req.params.id)
    currentTodo.status = !currentTodo.status
    await currentTodo.save()
    return res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400)
  }
})

// Изменение текста todo 
app.patch('/todos/:id', async (req, res) => {
  try {
    const currentTodo = await Todo.findById(req.params.id)
    currentTodo.body = req.body.text
    await currentTodo.save()
    return res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400)
  }
})




app.listen(port, () => {
  console.log(`Server start at port ${port}`);
  mongoose.connect(dbPath, dbOptions, () => {
    console.log(`Database ready`);
  })
})
