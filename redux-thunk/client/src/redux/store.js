import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initState from './initState';
import todoReducer from './reducers/todoReducer';
import thunk from 'redux-thunk'


const store = createStore(todoReducer, initState, composeWithDevTools(applyMiddleware(thunk)))

export default store
