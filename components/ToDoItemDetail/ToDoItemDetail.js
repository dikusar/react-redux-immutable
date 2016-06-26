import React, { Component } from 'react';

export default class ToDoItemDetail extends Component {
	render() {
		// const routeName = this.props.params.todo.replace(/-/g,' ');

		return (
			<div>
				You clicked on todo with <b>id {this.props.params.id}</b>
			</div>
		);
	}
}
