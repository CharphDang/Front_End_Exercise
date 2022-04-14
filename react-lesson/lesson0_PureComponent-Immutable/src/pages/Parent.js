import React, { PureComponent,Component } from 'react'
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount(){
    this.setState({
      count: 0
    })
  }
  render() {
    console.log('parent render') // Charph-log
    return (
      <div>
        Parent
        <Child></Child>
      </div>
    )
  }
}

export default Parent;