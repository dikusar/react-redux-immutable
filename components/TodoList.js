import React, { Component } from 'react'

class TodoList extends Component {
	render () {
		return (
			<div className="todo-list">
				{
					this.props.todos.map(
						singleTodo => {
							return <li key={singleTodo.id}>{singleTodo.text}</li>
						}
					)
				}
		 	</div>
		)
	}
}

export default TodoList