import { ADD_TODO, DELETE_TODO, EDIT_TODO, ALL_TODOS, CHANGE_STATUS } from "../types/types"

const todoReducer = (state, action) => {
  switch (action.type) {

    case ALL_TODOS: // ALL TODOS в данном случае не нужен, т.к это и есть дефолтный кейс
      return {
        ...state,
        todos: [...action.payload]
      }

    case ADD_TODO: // ALL TODOS в данном случае не нужен, т.к это и есть дефолтный кейс
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      }

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo._id === action.payload.id) {
            return { ...todo, body: action.payload.newBody }
          }
          return todo
        })
      }

    case CHANGE_STATUS:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo._id === action.payload) {
            return { ...todo, status: !todo.status }
          }
          return todo
        })
      }

    default:
      return state;
  }
}

export default todoReducer
