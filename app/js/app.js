import React from 'react';
import ReactDOM from 'react-dom';

//style imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//router imports
import { Router, browserHistory } from 'react-router';
import routes from './routes';

//configure the store for provider
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

//needed for material-ui.
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<Provider store={store}>
			<Router routes={routes} history={browserHistory}/>
		</Provider>
	</MuiThemeProvider>
	)

ReactDOM.render(
	<App />,
	document.getElementById('app')
	)