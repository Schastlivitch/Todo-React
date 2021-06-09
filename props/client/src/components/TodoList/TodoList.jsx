import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, deleteTodoHandler, editTodoHandler }) => {

  return (
    <>
      {
        todos.length ?
          todos.map((todo, i) => {
            return (
              <TodoItem key={todo.body} body={todo.body} status={todo.status} pos={i + 1} deleteTodoHandler={deleteTodoHandler} editTodoHandler={editTodoHandler}/>
            )
          })
          :
          <p>Nothing to do</p>
      }
    </>
  )
}
 
export default TodoList;
