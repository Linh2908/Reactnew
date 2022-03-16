import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartReducer} from './reducer/cartReducer';
import { walletReducer } from './reducer/walletReducer';
const initialState = {};

const rootReducer = combineReducers({
    cartReducer,
    walletReducer,
})

const milldleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...milldleware))
);

export default store;