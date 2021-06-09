import { ADD_TODO_SAGA, EDIT_TODO_SAGA, DELETE_TODO_SAGA, ALL_TODOS_SAGA, CHANGE_STATUS_SAGA } from '../types/types';

export const allTodosSaga = () => {
  return {
    type: ALL_TODOS_SAGA,
  }
}

export const addTodoSaga = (newTodo) => {
  return {
    type: ADD_TODO_SAGA,
    payload: newTodo
  }
}

export const editTodoSaga = (id, newBody) => {
  return {
    type: EDIT_TODO_SAGA,
    payload: { id, newBody }
  }
}

export const deleteTodoSaga = (id) => {
  return {
    type: DELETE_TODO_SAGA,
    payload: id 
  }
}

export const changeStatusSaga = (id) => {
  return {
    type: CHANGE_STATUS_SAGA,
    payload: id 
  }
}
