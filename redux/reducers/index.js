import { combineReducers } from 'redux'

import todoReducer from './TodoReducer'
import userInfoReducer from './UserInfoReducer'

const rootReducer = combineReducers({
	todos: todoReducer,
	user: userInfoReducer
})

export default rootReducer