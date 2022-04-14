function appMiddleware(...middlewares) {
    return createStore => reducer => {
        const store = createStore(reducer);

        // 拿到store.dispath，对其进行增强
        let dispatch = store.dispatch;
        const params = {
            getState: store.getState,
            dispatch: action => dispatch(action)
        };
        const middlewareChains = middlewares.map(middleware => middleware(params));
        console.log(middlewareChains, 'middlewareChains');
        dispatch = compose(...middlewareChains)(store.dispatch);
        console.log(compose(...middlewareChains), ' compose(...middlewareChains)');
        console.log(dispatch, '增强过后的dispatch');
        return {
            ...store,
            // 增强版的dispatch覆盖弱版
            dispatch
        };
    };
}

export default appMiddleware;

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b) => args => a(b(args)));
}
function f1(str) {
    str = str + ' f1增强';
    return next => {
        console.log('f1f1f1');
        return action => {
            console.log('f1', next);
            console.log('f1 action', action);
            next(action);
        };
    };
}
function f2(str) {
    str = str + ' f2增强';
    return next => {
        console.log('f2f2f2');
        return action => {
            console.log('f2', next);
            console.log('f2 action', action);

            next(action);
        };
    };
}
function f3(str) {
    str = str + ' f3增强';
    return next => {
        console.log('f3f3f3');
        return action => {
            console.log('f3', next);
            console.log('f3 action', action);

            next(action);
        };
    };
}

const newF = [f1, f2, f3].map(f => f(8));
const dispatch = function (action) {
    console.log('dispatch', action);
};

const newDispatch = compose(...newF)(dispatch);
console.log(newDispatch, '返回f1f2f3加强过后的dispatch');
console.log('-------开始触发加强版的dispatch-----------');
newDispatch(111);
console.log('-------加强版的dispatch执行完毕-----------');
