import React, { Component } from 'react';

import State from './hooks/State';
import Effect from './hooks/Effect';
import Memo from './hooks/Memo';
import Callback from './hooks/Callback';
import CustomerHook from './hooks/CustomerHook';
import Reducer from './hooks/Reducer';

export default class HooksPage extends Component {
    render() {
        return (
            <div>
                <State />
                <Effect />
                <Memo />
                <Callback />
                <CustomerHook />
                <Reducer />
            </div>
        );
    }
}
