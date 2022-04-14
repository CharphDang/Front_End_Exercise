const CartService = {
    getList(userInfo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userInfo.id === 123) {
                    resolve({ list: [{ name: '物品名称', price: '价格' }] });
                } else {
                    reject({ err: { msg: '获取列表失败' } });
                }
            }, 1000);
        });
    }
};
export default CartService;
