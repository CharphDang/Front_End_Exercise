import React, { Component } from 'react';

class Menu extends Component {
  render() {
    console.log(this.props.location);
    if (this.props.location.pathname === '/login') {
      return (
        <div>
          <p>登录的layout，没有菜单</p>
          {this.props.children}
        </div>
      );
    }
    return (
      <div>
        <p>Menu</p>
        {this.props.children}
      </div>
    );
  }
}

export default Menu;
