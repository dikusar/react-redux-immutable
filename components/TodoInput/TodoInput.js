import React, { Component } from 'react'
import './todoInput.styl'

export default class TodoInput extends Component {

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

	handleSubmit (event) {
		event.preventDefault;
		this.props.sendNewToDoToServer(this.state.inputText);
	}

	render () {
		return(
			<div className="todo-input">
				<input
					type="text"
					placeholder="Type something"
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
				/>
				<button className="todo-input__btn" onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>
		)
	}

}

