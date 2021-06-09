import { useTodoContext } from "../../context/todoContext";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {

  const {todos} = useTodoContext()

  return (
    <>
      {
        todos.length ?
          todos.map((todo, i) => {
            return (
              <TodoItem key={todo.body} body={todo.body} status={todo.status} pos={i + 1} />
            )
          })
          :
          <p>Nothing to do</p>
      }
    </>
  )
}
 
export default TodoList;
