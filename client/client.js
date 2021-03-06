import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import {routes} from './router'
import configureStore from '../redux/store'

let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo purposes'
	}],
	user: {
		username: 'den',
		id: 13
	}
}

let store=configureStore(initialState)

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>	,
	document.getElementById('app')
)