import allTodos from "../components/pseudoDb";

const { createContext, useContext, useState, useEffect } = require("react");

const todoContext = createContext()

const TodoContextProvider = ({ children }) => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(prev => [...prev, ...allTodos])
  }, [])

  const newTodoHandler = (todo) => {
    setTodos(prev => [...prev, { body: todo }])
  }

  const deleteTodoHandler = (body) => {
    setTodos(prev => prev.filter(todo => todo.body !== body))
  }

  const editTodoHandler = (oldBody, newBody) => {
    setTodos(prev => prev.map(todo => {
      if (oldBody === todo.body) {
        return { ...todo, body: newBody }
      }
      return todo
    }))
  }

  // Все стейты и хендлеры
  return (
    <todoContext.Provider value={{todos, newTodoHandler, deleteTodoHandler, editTodoHandler}}>{children}</todoContext.Provider> // В value все, что хотим отдать из контекста
  )
}

export default TodoContextProvider

const useTodoContext = () => useContext(todoContext)

export { useTodoContext }
