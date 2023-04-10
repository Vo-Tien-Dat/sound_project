import { PayloadAction } from '@reduxjs/toolkit';
import { all } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';
import { isLogging } from '../app/reducers/authSlice';
import authApi from '../api/authApi';
import { User } from '../models/user';

function* workerAuthPending(action: PayloadAction<any>) {
	const { userName, password } = action.payload;
	const user: Required<Pick<User, 'userName' | 'password'>> = {
		userName,
		password
	};
	try {
		const res: Promise<void> = yield call(authApi, user);
		const { data }: any = res;
		const { access_token } = data;
		window.localStorage.setItem('access_token', access_token);
	} catch (error) {
		console.log(error);
		/* throw message while server is error */
	}
}
export default function* watcherAuthPending() {
	yield takeEvery(isLogging.type, workerAuthPending);
}

function* authSaga() {
	yield all([watcherAuthPending()]);
}
