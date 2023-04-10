import { PayloadAction } from '@reduxjs/toolkit';
import { all } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { homeApi } from '../api/homeApi';
import { loadingDataPending, loadingDataSuccess } from '../app/reducers/homeSlice';
function* watcherHomePending(action: PayloadAction<any>) {
	try {
		const res: Promise<any> = yield call(homeApi);
		const { data }: any = res;
		yield put({ type: loadingDataSuccess.type, payload: data });
	} catch (error) {
		console.log(error);
	}
}

export default function* homeSaga() {
	yield takeEvery(loadingDataPending.type, watcherHomePending);
}
