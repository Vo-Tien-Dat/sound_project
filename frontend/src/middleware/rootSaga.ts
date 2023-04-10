import { all } from 'redux-saga/effects';
import albumSaga from './albumSaga';
import authSaga from './authSaga';
import homeSaga from './homeSaga';
import searchSaga from './searchSaga';
import usersSaga from './usersSaga';

export default function* rootSaga() {
	yield all([homeSaga(), authSaga(), usersSaga()]);
}
