import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from '../components/App'
import configureStore from '../redux/store'

let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo purposes'
	}]
}

let store=configureStore(initialState)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)