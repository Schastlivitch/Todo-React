import { ADD_TODO, EDIT_TODO, DELETE_TODO, ALL_TODOS, CHANGE_STATUS } from '../types/types';

export const allTodosRedux = (todos) => {
  return {
    type: ALL_TODOS,
    payload: todos
  }
}

export const addTodoRedux = (body) => {
  return {
    type: ADD_TODO,
    payload: { body, status: false }
  }
}

export const editTodoRedux = (oldBody, newBody) => {
  return {
    type: EDIT_TODO,
    payload: { oldBody, newBody }
  }
}

export const deleteTodoRedux = (body) => {
  return {
    type: DELETE_TODO,
    payload: body 
  }
}

export const changeStatusRedux = (body) => {
  return {
    type: CHANGE_STATUS,
    payload: body 
  }
}
