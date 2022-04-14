// import React, {Component} from "react";
// import ReactDOM from "react-dom";
// import React from 'react';
import ReactDOM, { useState } from './components/kreact/react-dom';
import Component from './components/kreact/Component';

import './index.css';

class ClassComponent extends Component {
    render() {
        return (
            <div className="border">
                <p>{this.props.name}</p>
            </div>
        );
    }
}

function FunctionComponent(props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    return (
        <div className="border">
            <button
                onClick={() => {
                    console.log('count', count); //sy-log
                    setCount(count + 1);
                }}
            >
                {count + ''}
            </button>
            {count % 2 ? <p>{props.name}</p> : <span>omg</span>}
            <span>{count2 + ''}</span>
        </div>
    );
}

const jsx = (
    <div className="border">
        <p>标题</p>
        <a href="https://www.baidu.com/" target="_blank">
            百度
        </a>
        <FunctionComponent name="函数组件11" />
        <ClassComponent name="类组件" />
    </div>
);

ReactDOM.render(jsx, document.getElementById('root'));

// 文本标签 done
// 原生标签 done
// 函数组件 done
// 类组件 done
