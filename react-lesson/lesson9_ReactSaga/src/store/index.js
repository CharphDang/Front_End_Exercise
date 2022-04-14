import { loginReducer } from './loginReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../action/rootSaga';
import cartReducer from './cartReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ user: loginReducer, cart: cartReducer }),

    // applyMiddleware(thunk),

    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
