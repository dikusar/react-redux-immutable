import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import todoReducer from './TodoReducer'
import userInfoReducer from './UserInfoReducer'

const rootReducer = combineReducers({
	todos: todoReducer,
	user: userInfoReducer,
	routing: routerReducer
})

export default rootReducer