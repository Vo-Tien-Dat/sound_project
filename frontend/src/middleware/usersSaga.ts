import { call, takeEvery, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { usersApi } from '../api/usersApi';
import { loadingData, loadingDataSuccess } from '../app/reducers/usersSlice';

function* watcherUsersPending(action: PayloadAction<any>) {
	try {
		const res: Promise<any> = yield call(usersApi);
		const { data }: any = res;
		yield put({ type: loadingDataSuccess.type, payload: data });
	} catch (error) {
		console.log(error);
	}
}

export default function* usersSaga() {
	yield takeEvery(loadingData.type, watcherUsersPending);
}
