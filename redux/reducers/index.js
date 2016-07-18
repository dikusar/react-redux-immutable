import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import todoReducer from './TodoReducer'
import userInfoReducer from './UserInfoReducer'
import userLog from './User'

const rootReducer = combineReducers({
	todos: todoReducer,
	user: userInfoReducer,
	userLog,
	routing: routerReducer
})

export default rootReducer