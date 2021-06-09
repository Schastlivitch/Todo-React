import TodoItem from "../TodoItem/TodoItem";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { allTodosSaga } from "../../redux/AC/todoSagaAC";


const TodoList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allTodosSaga())
  }, [dispatch])

  const todos = useSelector((state) => state.todos)

  return (
    <>
      {
        todos.length ?
          todos.map((todo, i) => {
            return (
              <TodoItem key={todo._id} id={todo._id} body={todo.body} status={todo.status} pos={i + 1} />
            )
          })
          :
          <p>Nothing to do</p>
      }
    </>
  )
}

export default TodoList;
