import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState){
	return createStore(
			rootReducer,
			preloadedState,
			composeWithDevTools(applyMiddleware(thunk))
		);
}