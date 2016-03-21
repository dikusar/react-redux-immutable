import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'

import rootReducer from './reducers'

let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)

export default function configureStore ( initialState = { todos: [], user: {} }) {
	return finalCreateStore(rootReducer, initialState);
}