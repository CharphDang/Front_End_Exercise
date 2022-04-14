import React, { Component } from 'react';
import matchPath from './matchPath';
import { RouterContext } from './RouterContext';

// 独占路由
// 渲染与改地址匹配的第一个子节点<Route /> 或者 <Redirect />
export default class Switch extends Component {
    static contextType = RouterContext;

    render() {
        const location = this.props.location || this.context.location;
        let match; // 标记匹配
        let element; // 记录匹配的元素
        React.Children.forEach(this.props.children, child => {
            if (match == null && React.isValidElement(child)) {
                element = child;
                match = child.props.path
                    ? matchPath(location.pathname, child.props)
                    : this.context.match;
            }
        });
        return match ? React.cloneElement(element, { computedMatch: match }) : null;
    }
}
