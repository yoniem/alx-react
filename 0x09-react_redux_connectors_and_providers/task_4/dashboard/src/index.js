import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
