import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(uiReducer, composeWithDevTools(applyMiddleware(thunk)));
