import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'


import actions from '../../redux/actions'
import { TodoInput } from '../../components'
// styles
import './app.styl'

export default class App extends Component {

	render () {
		return (
			<div className="app">
				<h1>Menu</h1>
                <ul className="menu">
                <li className="menu__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/todo-list">ToDo List</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/user-info">User Info</Link>
                    </li>
                </ul>
				<main>
					 {React.cloneElement(this.props.children, this.props)}
				</main>
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

// export default App;