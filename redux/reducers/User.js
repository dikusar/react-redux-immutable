import {
	LOGIN_REQUEST,
 	LOGIN_FAIL,
 	LOGIN_SUCCESS,
 	LOGOUT_SUCCESS
} from '../constants/User'

// const initialState = JSON.parse(window.localStorage.getItem('rr_login')) || {}

export default function userstate(state = window.localStorage.getItem('rr_login') || {}, action) {
	switch (action.type) {

		case LOGIN_REQUEST:
			return {}
			break

		case LOGIN_SUCCESS:
			return {}
			break

		case LOGIN_FAIL:
			return {}
			break

		case LOGOUT_SUCCESS:
			return {}
			break

		default:
			return state
	}
}