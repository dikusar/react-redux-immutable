let actions = {

    addTodo (text) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    },

    completeTodo (id) {
       return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },

    deleteTodo (id)  {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },

    createNewUserId () {
    	return {
    		type: 'CREATE_USER_ID',
    		id: Math.round( Math.random()*100 )
    	}
    },

    // This function returns function but NOT OBJECT, and redux-thunk FIRST call this function 
    // and then call function with was send into dispatch() method 
    createNewUserIdIfOdd () {
    	return (dispatch, getState) => {
			const { user } = getState();
			if (user.id % 2 === 0) return;
			// send into dispatch() that function which we want to call next
			dispatch(actions.createNewUserId());
    	}
     }
}

export default actions;



