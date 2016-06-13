import React from 'react'
import { Route, IndexRoute } from 'react-router'
// import { Provider } from 'react-redux'

// import configureStore, { history } from '../redux/store'
import { history } from '../redux/store'

import {App} from '../containers'
import {
	TodoList,
	UserInfo

} from '../components';

// let initialState = {
// 	todos: [{
// 		id: 0,
// 		completed: false,
// 		text: 'Initial todo for demo purposes'
// 	}],
// 	user: {
// 		username: 'den',
// 		id: 13
// 	}
// }

// let store=configureStore(initialState)

export const routes = (
	<div>
		<Route path="/" component={App}>
			<IndexRoute component={UserInfo} />
			<Route path="/todo-list" component={TodoList} />
		</Route>
	</div>
);