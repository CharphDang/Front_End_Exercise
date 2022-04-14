import React from 'react';
export default class LifeCycle extends React.Component {
    componentDidMount() {
        if (this.props.onMount) {
            this.props.onMount.call(this, this);
        }
    }
    componentWillUnmount() {
        if (this.props.onWillUnmount) {
            this.props.onWillUnmount.call(this, this);
        }
    }
    render() {
        return null;
    }
}
