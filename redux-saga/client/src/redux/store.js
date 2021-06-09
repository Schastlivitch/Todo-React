import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initState from './initState';
import todoReducer from './reducers/todoReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todoReducer, initState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);


export default store

