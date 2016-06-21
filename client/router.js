import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { history } from '../redux/store'

import {App} from '../containers'
import {
	TodoList,
	UserInfo,
    TodoDetail,
    Home,
    NotFound

} from '../components';

export const routes = (
    <div>
    	<Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="user-info" component={UserInfo} />
    		<Route path="todo-list" component={TodoList} />
    	</Route>
        <Route path='*' component={NotFound} />
    </div>
);