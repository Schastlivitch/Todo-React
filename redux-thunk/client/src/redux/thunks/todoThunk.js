import { allTodosRedux, addTodoRedux, editTodoRedux, deleteTodoRedux, changeStatusRedux } from "../AC/todoAC"

export const allTodosThunk = () => async (dispatch, getState) => {
  const response = await fetch('http://localhost:3100/todos')
  const allTodos = await response.json()
  dispatch(allTodosRedux(allTodos))
}

export const addTodoThunk = (text) => async (dispatch, getState) => {
  const response = await fetch('http://localhost:3100/todos', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ body: text })
  })
  if (response.status === 200) {
    const newTodo = await response.json()
    dispatch(addTodoRedux(newTodo))
  }
}

export const editTodoThunk = (id, newBody) => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:3100/todos/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: newBody })
  })
  if (response.status === 200) {
    dispatch(editTodoRedux(id, newBody))
  }
}

export const deleteTodoThunk = (id) => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:3100/todos/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (response.status === 200) {
    dispatch(deleteTodoRedux(id))
  }
}

export const changeStatusThunk = (id) => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:3100/todos/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (response.status === 200) {
    dispatch(changeStatusRedux(id))
  }
}
