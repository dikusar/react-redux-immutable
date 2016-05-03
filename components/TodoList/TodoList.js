import React, { Component } from 'react'

import	TodoItem from '../TodoItem/TodoItem'

export default class TodoList extends Component {
	render () {
		return (
			<div className="todo-list">
				{
					this.props.todos.map(
						singleTodo => {
							return(
								<TodoItem
							 		key={singleTodo.id}
							 		todo={singleTodo}
							 		actions={this.props.actions}
						 		/>
					 		)
						}
					)
				}
		 	</div>
		)
	}
}

// export default TodoList