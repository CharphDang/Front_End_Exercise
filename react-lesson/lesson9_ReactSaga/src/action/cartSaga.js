import { call, put, takeEvery } from '@redux-saga/core/effects';
import CartService from '../service/cart';
// worker
function* handleGetList(action) {
    console.log(action.payload, '-------action.payload');
    const res = yield call(CartService.getList, action.payload);
    yield put({ type: 'SET', payload: res.list });
}

// watcher
export default function* cartSaga() {
    yield takeEvery('GETLIST', handleGetList);
}
