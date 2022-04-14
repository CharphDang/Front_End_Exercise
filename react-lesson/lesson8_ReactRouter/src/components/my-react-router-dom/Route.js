import React, { Component } from 'react';
import matchPath from './matchPath';
import { RouterContextConsumer, RouterContextProvider } from './RouterContext';

export default class Route extends Component {
    render() {
        const { path, component, render, children, computedMatch } = this.props;

        return (
            <RouterContextConsumer>
                {context => {
                    // const match = context.location.pathname === path;
                    const match = computedMatch
                        ? computedMatch
                        : path
                        ? matchPath(context.location.pathname, this.props)
                        : context.match;
                    console.log(match);
                    // 定义给路由组件中传递的routeProps
                    const routeProps = {
                        ...context,
                        match
                    };
                    // match => children, component, render, null
                    // not match => children(function), null

                    return (
                        <RouterContextProvider value={routeProps}>
                            {match
                                ? children
                                    ? typeof children === 'function'
                                        ? children(routeProps)
                                        : children
                                    : component
                                    ? React.createElement(component, routeProps)
                                    : render
                                    ? render(routeProps)
                                    : null
                                : typeof children === 'function'
                                ? children(routeProps)
                                : null}
                        </RouterContextProvider>
                    );
                    // return match ? React.createElement(component) : null;
                }}
            </RouterContextConsumer>
        );
    }
}
