import React, { Component } from 'react'

class UserInfo extends Component {

	handleNewId () {
		this.props.actions.createNewUserId()
	}

	handleNewIdIfOdd () {
		this.props.actions.createNewUserIdIfOdd()	
	}

	handleNewIdAsync () {
		this.props.actions.createNewUserIdAsync()
	}

	render () {
		return(
			<div>
				<div>user name: {this.props.user.username}</div>
				<div>user id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>
					Update with random ID
				</button>
				<button onClick={this.handleNewIdIfOdd.bind(this)}>
					Update if ODD
				</button>
				<button onClick={this.handleNewIdAsync.bind(this)}>
					Update <b>ASYNC</b>
				</button>
			</div>
		)
	}

}

export default UserInfo