import React, { Component } from 'react'
import { Link } from 'react-router'

//  Styles
import './TodoItem.styl'

export default class TodoItem extends Component {

    handleComplete () {
        this.props.actions.completeTodo(this.props.todo.id)
    }

    handleDelete () {
       this.props.actions.deleteTodo(this.props.todo.id)
    }

    render () {
        return (
             <li className="todo-item">
                <div> {this.props.todo.text} </div>
                <button className="todo-item__btn" onClick={ this.handleComplete.bind(this) }>
                    Mark as completed 
                </button>
                <button className="todo-item__btn" onClick={ this.handleDelete.bind(this) }>
                    Delete todo 
                 </button>
                 <Link className="todo-item__link" to={`/todo-item/${this.props.todo.id}`} >
                    More detail 
                 </Link>
            </li>
        )
    }
}

