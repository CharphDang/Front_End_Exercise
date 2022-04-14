// import React, {Component} from "react";
// import ReactDOM from "react-dom";
import React from 'react';
import ReactDOM from './components/kreact/react-dom';
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
    return (
        <div className="border">
            <p>{props.name}</p>
        </div>
    );
}

const jsx = (
    <div className="border">
        <p>标题</p>
        <a href="https://www.baidu.com/" target="_blank">
            百度
        </a>
        <FunctionComponent name="函数组件" />
        <ClassComponent name="类组件" />
        <>
            <b>哈哈</b>
        </>

        <ul>
            {[1, 2, 3].map(item => (
                <React.Fragment key={item}>
                    <li>{item}</li>
                </React.Fragment>
            ))}
        </ul>
    </div>
);

ReactDOM.render(jsx, document.getElementById('root'));

// 文本标签 done
// 原生标签 done
// 函数组件 done
// 类组件 done
// Fragment
// 逻辑组件 Provider Consumer
