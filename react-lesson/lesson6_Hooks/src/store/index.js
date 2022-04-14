import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

export const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'MINUS':
            return state - action.payload || 1;
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({ count: countReducer }),
    applyMiddleware(promise, thunk, logger)
);
export default store;
