import React, { Component } from 'react';
import { RouterContextProvider } from './RouterContext';

export default class Router extends Component {
    static computeRootMatch(pathname) {
        return { path: '/', url: '/', params: {}, isExact: pathname === '/' };
    }

    constructor(props) {
        super(props);
        this.state = {
            location: props.history.location
        };

        // * 订阅、监听函数，必须要记住 拿回注销函数，并在willUnmount的时候调用
        this.unlisten = props.history.listen(location => {
            this.setState({ location });
        });
    }

    componentWillUnmount() {
        this.unlisten && this.unlisten();
    }

    render() {
        const { history, children } = this.props;
        return (
            <RouterContextProvider
                value={{
                    history,
                    location: this.state.location,
                    match: Router.computeRootMatch(this.state.location.pathname)
                }}
            >
                {children}
            </RouterContextProvider>
        );
    }
}
