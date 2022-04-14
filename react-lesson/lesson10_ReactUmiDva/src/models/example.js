import { getProductData } from '../services/product';

export default {
  namespace: 'example',

  state: {
    data: [],
    pageSize: 10,
    current: 1,
    total: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      console.log('example subscriptions'); //sy-log
    },
  },

  effects: {
    *getProductData({ payload }, { call, put }) {
      //   eslint-disable-line
      const res = yield call(getProductData, payload);
      yield put({ type: 'save', payload: res.data });
    },
  },

  // 定义了修改规则
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
