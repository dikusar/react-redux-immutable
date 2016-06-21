import React, { Component } from 'react'

import	TodoItem from '../TodoItem/TodoItem'
import	TodoInput from '../TodoInput/TodoInput'

// Styles
import './todoList.styl'

export default class TodoList extends Component {
	render () {
		return (
			<div className="todo-list">
				<TodoInput sendNewToDoToServer={this.props.actions.sendNewToDoToServer}/>
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