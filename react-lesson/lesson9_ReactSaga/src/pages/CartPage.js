import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(({ cart, user }) => ({ cart, user }), {
    getList: userInfo => ({ type: 'GETLIST', payload: userInfo })
})
class CartPage extends Component {
    render() {
        const { cart, user, getList } = this.props;
        console.log(cart, 'cart');
        console.log(user.isLogin, 'isLogin');
        return (
            <div>
                <h3>CartPage</h3>
                <button
                    onClick={() => {
                        getList(user.userInfo);
                    }}
                >
                    获取购物车列表
                </button>
                <div>
                    {cart.map(item => (
                        <div key={item.name}>
                            <p>
                                商品：{item.name} 价格：{item.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default CartPage;
