import allTodos from "./components/pseudoDb";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import { useEffect, useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(prev => [...prev, ...allTodos])
  }, [])

  const newTodoHandler = (todo) => {
    setTodos(prev => [...prev, {body: todo}])
  }

  const deleteTodoHandler = (body) => {
    setTodos(prev => prev.filter(todo => todo.body !== body))
  }

  const editTodoHandler = (oldBody, newBody) => {
    setTodos(prev => prev.map(todo => {
      if (oldBody === todo.body) {
        return {...todo, body: newBody}
      }
      return todo
    }))
  }

  return (
    <div className="container">
      <Input newTodoHandler={newTodoHandler} />
      <TodoList todos={todos} deleteTodoHandler={deleteTodoHandler} editTodoHandler={editTodoHandler} />
    </div>
  );
}

export default App;
