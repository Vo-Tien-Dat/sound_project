import { PayloadAction } from '@reduxjs/toolkit';
import { all } from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { isLogging, isLoggingStatus } from '../app/reducers/authSlice';
import authApi from '../api/authApi';
import { User } from '../models/user';

function* workerAuthPending(action: PayloadAction<any>) {
	const { userName, password } = action.payload;
	const user: Required<Pick<User, 'userName' | 'password'>> = {
		userName,
		password
	};
	const access_token: string =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjEzODY4OTkxMzEsImlzcyI6ImppcmE6MTU0ODk1OTUiLCJxc2giOiI4MDYzZmY0Y2ExZTQxZGY3YmM5MGM4YWI2ZDBmNjIwN2Q0OTFjZjZkYWQ3YzY2ZWE3OTdiNDYxNGI3MTkyMmU5IiwiaWF0IjoxMzg2ODk4OTUxfQ.uKqU9dTB6gKwG6jQCuXYAiMNdfNRw98Hw_IWuA5MaM';
	try {
		// const res: Promise<void> = yield call(authApi, user);
		// const { data }: any = res;
		// const { access_token } = data;
		window.localStorage.setItem('access_token', access_token);
		yield put({ type: isLoggingStatus.type, payload: { logging_success_status: true } });
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
