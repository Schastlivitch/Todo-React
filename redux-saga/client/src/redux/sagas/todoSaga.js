import { takeLatest, put, call, all } from "redux-saga/effects";
// import { takeLatest, put, call, takeEvery, debounce, all } from "redux-saga/effects";
import { addTodoRedux, allTodosRedux, changeStatusRedux, deleteTodoRedux, editTodoRedux } from "../AC/todoAC";
import { ADD_TODO_SAGA, ALL_TODOS_SAGA, CHANGE_STATUS_SAGA, DELETE_TODO_SAGA, EDIT_TODO_SAGA } from "../types/types";

async function allTodosFetch() {
  const response = await fetch('http://localhost:3100/todos')
  const todos = await response.json()
  return todos
}

function* allTodosWorker() {
  const todos = yield call(allTodosFetch);
  yield put(allTodosRedux(todos));
}

function* allTodosWatcher() {
  yield takeLatest(ALL_TODOS_SAGA, allTodosWorker)
}

async function addTodoFetch(payload) {
  const response = await fetch('http://localhost:3100/todos', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ body: payload })
  })
  const newTodo = await response.json()
  return newTodo
}

function* addTodoWorker({ payload }) {
  const newTodo = yield call(addTodoFetch, payload);
  yield put(addTodoRedux(newTodo));
}

function* addTodoWatcher() {
  yield takeLatest(ADD_TODO_SAGA, addTodoWorker)
}

async function editTodoFetch(payload) {
  await fetch(`http://localhost:3100/todos/${payload.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: payload.newBody })
  })
}

function* editTodoWorker({ payload }) {
  yield call(editTodoFetch, payload);
  yield put(editTodoRedux(payload.id, payload.newBody));
}

function* editTodoWatcher() {
  yield takeLatest(EDIT_TODO_SAGA, editTodoWorker)
}

async function deleteTodoFetch(payload) {
  await fetch(`http://localhost:3100/todos/${payload}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  })
}

function* deleteTodoWorker({ payload }) {
  yield call(deleteTodoFetch, payload);
  yield put(deleteTodoRedux(payload));
}

function* deleteTodoWatcher() {
  yield takeLatest(DELETE_TODO_SAGA, deleteTodoWorker)
}

async function changeStatusFetch(payload) {
  await fetch(`http://localhost:3100/todos/${payload}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    }
  })
}

function* changeStatusWorker({ payload }) {
  yield call(changeStatusFetch, payload);
  yield put(changeStatusRedux(payload));
}

function* changeStatusWatcher() {
  yield takeLatest(CHANGE_STATUS_SAGA, changeStatusWorker)
}

export default function* rootSaga() {
  yield all([
    allTodosWatcher(),
    addTodoWatcher(),
    editTodoWatcher(),
    deleteTodoWatcher(),
    changeStatusWatcher()
  ])
}
