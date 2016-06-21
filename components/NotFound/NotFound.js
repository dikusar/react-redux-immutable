import React, { Component } from 'react';
import { Link } from 'react-router'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                Page not found. Come back to <Link className="link" to='/'>Main</Link>
            </div>
        );
    }
}
