import { ADD_TODO, EDIT_TODO, DELETE_TODO, ALL_TODOS, CHANGE_STATUS } from '../types/types';

export const allTodosRedux = (todos) => {
  return {
    type: ALL_TODOS,
    payload: todos
  }
}

export const addTodoRedux = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export const editTodoRedux = (id, newBody) => {
  return {
    type: EDIT_TODO,
    payload: { id, newBody }
  }
}

export const deleteTodoRedux = (id) => {
  return {
    type: DELETE_TODO,
    payload: id 
  }
}

export const changeStatusRedux = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: id 
  }
}
