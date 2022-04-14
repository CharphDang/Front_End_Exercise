import React, { Component, PureComponent } from 'react';
import Immu from './Immutable';

class Child extends PureComponent {
  render() {
    console.log('Child render'); // Charph-log

    return (
      <div>
        Child
        <Immu></Immu>
      </div>
    );
  }
}

export default Child;
