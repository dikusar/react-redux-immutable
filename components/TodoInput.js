import React, { Component } from 'react'

// import TextDisplay from './TextDisplay'

class TodoInput extends Component {

	constructor (props, context) {
		super(props, context)
		this.state = {
			inputText: ''
		}
	}

	handleChange (event) {
		this.setState({
			inputText: event.target.value
		})
	}

	render () {
		return(
			<div>
				<input
					type="text"
					placeholder="Type something"
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
				/>
				<button>Submit</button>
			</div>
		)
	}

}

export default TodoInput