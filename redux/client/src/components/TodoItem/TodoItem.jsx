import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatusRedux, deleteTodoRedux, editTodoRedux } from "../../redux/AC/todoAC";

const TodoItem = ({ body, status, pos }) => {

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
  
  const editTodoHandler = (oldBody, newBody) => {
    dispatch(editTodoRedux(oldBody, newBody))
  }
  
  const deleteTodoHandler = (oldBody, newBody) => {
    dispatch(deleteTodoRedux(oldBody, newBody))
  }
  
  const changeStatusHandler = () => {
    dispatch(changeStatusRedux(body))
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          {
            isChanging ?
              <div className="d-flex">
                <input type="text" className="form-control" placeholder="Text todo here" onChange={inputHandler} value={input} />
                <button type="submit" className="btn btn-success ms-3" onClick={() => editTodoHandler(body, input)}>Submit</button>
              </div>
              :
              <span className={status ? 'text-success' : 'text-danger'}>{pos}. {body}</span>
          }
        </div>
        <div>
          {
            status ?
              <button type="submit" className="btn btn-primary" onClick={changeStatusHandler}>Undone</button>
              :
              <button type="submit" className="btn btn-success" onClick={changeStatusHandler}>Done</button>
          }
          <button type="submit" className="btn btn-danger ms-3" onClick={() => deleteTodoHandler(body)}>Delete</button>
          <button type="submit" className="btn btn-warning ms-3" onClick={isChangingHandler}>Edit</button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;

