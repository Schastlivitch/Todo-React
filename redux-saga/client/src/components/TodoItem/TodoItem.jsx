import { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { editTodoSaga, deleteTodoSaga, changeStatusSaga } from "../../redux/AC/todoSagaAC";


const TodoItem = ({ body, status, pos, id }) => {
  console.log('todo mount');

  const dispatch = useDispatch()

  const [isChanging, setIsChanging] = useState(false)
  const [input, setInput] = useState(body)

  const isChangingHandler = () => {
    setIsChanging(!isChanging)
    setInput(body)
  }

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const editTodoHandler = async (id, newBody) => {
    dispatch(editTodoSaga(id, newBody))
    isChangingHandler()
  }

  const deleteTodoHandler = async (id) => {
    dispatch(deleteTodoSaga(id))
  }

  const changeStatusHandler = async (id) => {
    dispatch(changeStatusSaga(id))
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          {
            isChanging ?
              <div className="d-flex">
                <input type="text" className="form-control" placeholder="Text todo here" onChange={inputHandler} value={input} />
                <button type="submit" className="btn btn-success ms-3" onClick={() => editTodoHandler(id, input)}>Submit</button>
              </div>
              :
              <span className={status ? 'text-success' : 'text-danger'}>{pos}. {body}</span>
          }
        </div>
        <div>
          {
            status ?
              <button type="submit" className="btn btn-primary" onClick={() => changeStatusHandler(id)}>Undone</button>
              :
              <button type="submit" className="btn btn-success" onClick={() => changeStatusHandler(id)}>Done</button>
          }
          <button type="submit" className="btn btn-danger ms-3" onClick={() => deleteTodoHandler(id)}>Delete</button>
          <button type="submit" className="btn btn-warning ms-3" onClick={isChangingHandler}>Edit</button>
        </div>
      </div>
    </>
  );
}


export default memo(TodoItem);

