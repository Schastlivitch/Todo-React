import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoThunk } from "../../redux/thunks/todoThunk";

const Input = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const newTodoHandler = async (text) => {
    dispatch(addTodoThunk(text)) 
    setInput('')
  }

  return (
    <>
      <div className="container w-50">
        <div className="d-flex justify-content-between my-3 align-items-center">
          <input type="text" className="form-control" placeholder="Text todo here" onChange={inputHandler} value={input} />
          <button type="submit" className="btn btn-primary ms-3" onClick={() => newTodoHandler(input)}>Todo</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Input;
