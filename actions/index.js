export addTodo (todo) {
	return {
		type: 'addTodo',
		todo
	}
}

export deleteTodo (index) {
	return {
		type: 'deleteTodo',
		index
	}
}
