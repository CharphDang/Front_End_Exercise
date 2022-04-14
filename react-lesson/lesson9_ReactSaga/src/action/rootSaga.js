import { all } from 'redux-saga/effects';
import cartSaga from './cartSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
    yield all([loginSaga(), cartSaga()]);
}
