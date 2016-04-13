let actions = {

    addTodo (text) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    },

    //  Put new To do item into the server by fetch() method
    // and when success - call addTodo() action
    sendNewToDoToServer (text) {
        return (dispatch) => {
            fetch('/comments.json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: 'Hubot',
                    login: 'hubot',
                })
            })
            .then( () => dispatch( actions.addTodo(text)) ).catch(error => {
                console.log('request failed', error);
            })
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
    // and then call function wich was send into dispatch() method 
    createNewUserIdIfOdd () {
    	return (dispatch, getState) => {
			const { user } = getState();
			if (user.id % 2 === 0) return;
			// send into dispatch() that function which we want to call next
			dispatch(actions.createNewUserId());
    	}
     },

     //  Handled async ger request to server. If response was succecess - dispatch() actions we need inside .done() - inside of succecess $.get func 
     createNewUserIdAsync () {
        return (dispatch) => {
            setTimeout (()=> {
                dispatch(actions.createNewUserId()); 
            }, 2000);
        }
     }
}

export default actions;



