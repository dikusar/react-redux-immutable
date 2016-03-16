import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {

	render () {
		return (
			<div className="app">
				<h1> Todo List</h1>
				<TodoInput dispatch={this.props.dispatch} />
				<TodoList todos={this.props.todos} />
			</div>
		)
	}

}

// Func for mapping the App's state to the NEEDED part of the state
// In this case - this is state.todos. But also we can have, for example, state.userData or 
// something else
function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(App)