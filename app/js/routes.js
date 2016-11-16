import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import DashboardContainer from './containers/DashboardContainer';

export default (
		<Route path='/' component={App}>
			<IndexRoute component={LoginContainer} />
			<Route path='/register' component={RegisterContainer} />
			<Route path='/dashboard' component={DashboardContainer} />
		</Route>
	)