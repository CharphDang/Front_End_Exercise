import React, { useReducer } from 'react';
import { countReducer } from '../../store';

function initFn(str) {
    return str - 0;
}

function Reducer(props) {
    // * 注意： 此处的dispatch 只能处理简单的逻辑，并不支持异步
    const [count, dispatch] = useReducer(countReducer, '20', initFn);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch({ type: 'ADD' })}>add</button>
        </div>
    );
}

export default Reducer;
