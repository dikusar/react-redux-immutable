import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from '../../redux/actions'
import {
	TodoInput,
	TodoList,
	UserInfo

} from '../../components';
import './app.styl'


class App extends Component {

	render () {
		return (
			<div className="app">
				<UserInfo
					user={this.props.user} 
					actions={this.props.actions} 
				/>
				<h1 className="app__title"> Todo List</h1>
				<TodoInput
					sendNewToDoToServer={this.props.actions.sendNewToDoToServer} 
				/>
				<TodoList
					todos={this.props.todos}
					actions={this.props.actions} 
				/>
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

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// connect(mapStateToProps, mapDispatchToProps)(App);