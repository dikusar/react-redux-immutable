import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './reducers'

let finalCreateStore = compose(
	applyMiddleware(thunk, logger())
)(createStore)


export default function configureStore ( initialState = { todos: [], user: {} }) {
	return finalCreateStore(rootReducer, initialState);
}

// export const history = syncHistoryWithStore(browserHistory, finalCreateStore);

