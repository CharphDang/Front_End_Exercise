import React, { Component } from 'react';
import { RouterContextConsumer } from './RouterContext';
import LifeCycle from './LifeCycle';
export default class Prompt extends Component {
    render() {
        const { when, message } = this.props;
        return (
            <RouterContextConsumer>
                {context => {
                    if (!when) {
                        return null;
                    }
                    let method = context.history.block;
                    return (
                        <LifeCycle
                            onMount={self => {
                                self.release = method(message);
                            }}
                            onWillUnmount={self => {
                                self.release();
                            }}
                        />
                    );
                }}
            </RouterContextConsumer>
        );
    }
}
