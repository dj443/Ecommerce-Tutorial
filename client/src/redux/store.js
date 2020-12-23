import {combineReducers, applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducers';


const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    categories: categoryReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;