export default function combineReducers(reducers) {
    return (state = {}, action) => {
        let nextState = {};
        let hasChanged = false;
        Object.keys(reducers).forEach(key => {
            const reducer = reducers[key];
            nextState[key] = reducer(state[key], action);
            hasChanged = hasChanged || state[key] !== nextState[key];
        });

        // 源码中： 此处是为了应对replaceReducer API专门处理比较的
        hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
