import React, { Component } from 'react'
import { Link } from 'react-router'

import './menu.styl'

export default class Menu extends Component {
	render() {
		return (
			<ul className="menu">
                <li className="menu__item">
                    <Link className="link" 
                        activeClassName="link link_type_active"
                        onlyActiveOnIndex={true} 
                        to="/">
                        Home
                    </Link>
                </li>
                <li className="menu__item">
                    <Link className="link"
                         activeClassName="link link_type_active" 
                         to="/todo-list">
                         ToDo List
                     </Link>
                </li>
                <li className="menu__item">
                    <Link className="link"
                        activeClassName="link link_type_active"
                        to="/user-info">
                        User Info
                    </Link>
                </li>
                <li className="menu__item">
                    <Link className="link"
                        activeClassName="link link_type_active"
                        to="/login">
                        Login
                    </Link>
                </li>
            </ul>
		);
	}
}
