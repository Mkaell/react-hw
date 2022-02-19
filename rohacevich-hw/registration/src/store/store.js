import { rootReducer } from './reducers/reducer'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
))

export default store