// import { applyMiddleware, createStore, combineReducers } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';

import isPromise from 'is-promise';

import { createStore, applyMiddleware, combineReducers } from '../components/my-redux';

const countReducer = (state = 0, action) => {
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
    // countReducer,
    combineReducers({ count: countReducer }),
    applyMiddleware(promise, thunk, logger)
);
export default store;

function thunk({ dispatch, getState }) {
    return next => action => {
        // action 数据类型是？对象 | 函数
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action);
    };
}

function logger({ dispatch, getState }) {
    return next => action => {
        console.log('++++++++++++++++++++++++++'); //sy-log

        console.log(action.type + '执行了！！！'); //sy-log

        const prevState = getState();
        console.log('prev state', prevState); //sy-log

        // todo
        const returnValue = next(action);

        const nextState = getState();
        console.log('next state', nextState); //sy-log

        console.log('++++++++++++++++++++++++++'); //sy-log

        return returnValue;
    };
}

function promise({ dispatch }) {
    return next => action => {
        return isPromise(action) ? action.then(dispatch) : next(action);
    };
}
