import React, { Component } from 'react'

class UserInfo extends Component {

	handleNewId () {
		this.props.actions.createNewUserId()
	}

	handleNewIdIfOdd () {
		this.props.actions.createNewUserIdIfOdd()	
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
			</div>
		)
	}

}

export default UserInfo