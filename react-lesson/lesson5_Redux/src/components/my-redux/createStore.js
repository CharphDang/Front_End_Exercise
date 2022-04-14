function createStore(reducer, enhancer) {
    if (enhancer) {
        // enhancer 的目的是用来增强store.dispatch 方法，让其支持异步函数，
        // 要想访问store.dispatch，那就必须拿到createStore自身，并执行它自己
        // 返回一个增强后的createStore1， 再次执行createStore1(reducer)，把store返回给使用者，
        // enhancer 是applyMiddleware()后的内容，
        // 意味着： applyMiddleware()返回的就是enhancer函数，enhancer再次执行之后，返回增强后的createStore
        // applyMiddleware => createStore => reducer => {}
        return enhancer(createStore)(reducer);
    }
    // store state
    let state;
    // 监听函数数组
    let subscribeList = [];

    // 获取状态
    const getState = () => {
        return state;
    };

    // 修改状态
    const dispatch = action => {
        state = reducer(state, action);
        // store state已经发生了变化
        // next step: 通知组件
        subscribeList.forEach(cb => cb());
    };

    const subscribe = cb => {
        subscribeList.push(cb);

        // * 返回取消订阅函数，这样才能成对出现
        return () => {
            subscribeList.forEach((item, index) => {
                if (cb === item) {
                    subscribeList.splice(index, 1);
                }
            });
        };
    };

    // 手动执行dispatch，派发初始值
    dispatch({ type: 'adaf3231dfafd1asd5as' });

    return {
        getState,
        dispatch,
        subscribe
    };
}

export { createStore };
