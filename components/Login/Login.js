import React, { Component,  PropTypes } from 'react';

export default class Login extends Component {

	 constructor() {
	    super();
	    // Use this because of in react 0.15 doesn't support two-way binding
	    this.handleSubmit = this.handleSubmit.bind(this)
  	}

  	static onEnter (nextState, replace) {
  		const login = window.localStorage.getItem('rr_login');
  		if (login === 'admin') {
  			replace('/admin')
  		}
	}

	handleSubmit (e) {
		e.preventDefault();
		const value = e.target.elements[0].value;
		if (value !== '') {
		// Save login to the localStorage 
		  window.localStorage.setItem('rr_login', value);
	  	// Check value, if equals to 'admin' go to 'admin' Route else go to IndexRoute
		  value === 'admin' ? this.context.router.push('/admin') : this.context.router.push('/');
		} else {
			alert('You should enter something');
		}
	} 

	render() {
		return (
			<div className="login">
				<h5>Please, enter login</h5>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="login" />
					<button type="submit">Enter</button>
				</form>
			</div>
		);
	}

}

Login.contextTypes = {
	router: PropTypes.object.isRequired
}
