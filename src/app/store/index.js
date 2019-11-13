import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers(rootReducer);
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk))
)
export default store;