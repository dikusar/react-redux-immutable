import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { history } from '../redux/store'

import {App} from '../containers'
import {
	TodoList,
	UserInfo,
    Home,
    NotFound,
    ToDoItemDetail

} from '../components';

export const routes = (
    <div>
    	<Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/user-info" component={UserInfo} />
    		<Route path="/todo-list" component={TodoList} />
    		<Route path="/todo-item/:id" component={ToDoItemDetail} />
    	</Route>
        <Route path='*' component={NotFound} />
    </div>
);