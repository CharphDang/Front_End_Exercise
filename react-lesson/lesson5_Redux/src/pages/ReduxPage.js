import React, { Component } from 'react';
import store from '../store';
export default class ReduxPage extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe && this.unsubscribe();
    }
    add = () => {
        store.dispatch({ type: 'ADD' });
    };
    minus = () => {
        store.dispatch({ type: 'MINUS' });
    };

    promiseMinus = () => {
        store.dispatch(
            Promise.resolve({
                type: 'MINUS',
                payload: 100
            })
        );
    };

    asyAdd = () => {
        // setTimeout(() => {
        //   store.dispatch({type: "ADD"});
        // }, 1000);

        store.dispatch((dispatch, getState) => {
            console.log(getState(), 'asyAdd');
            setTimeout(() => {
                dispatch({ type: 'ADD' });
            }, 1000);
        });
    };

    render() {
        return (
            <div>
                <p>{store.getState().count}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.asyAdd}>asyAdd</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.promiseMinus}>promiseMinus</button>
            </div>
        );
    }
}
