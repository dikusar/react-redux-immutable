// Lib
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

// App js
import actions from '../../redux/actions'
import { Menu } from '../../components'

// App styles
import '../../styles/common.styl'
import './app.styl'

export default class App extends Component {

	render () {
		return (
			<div className="app">
                <Menu />
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