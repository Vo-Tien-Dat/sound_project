import { PayloadAction } from '@reduxjs/toolkit';
import { all } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';
import { createdUserApi } from '../api/userApi';
import { authUserPending } from '../app/reducers/userSlice';
import { User } from '../models/user';

function* watcherAuthUserError() {}

function* watcherAuthUserSuccess() {}

type UserUsedSignUp = Required<Omit<User, 'userId'>>;
type UserUsedSignIn = Required<Pick<User, "userName" | "password">>; 

function* workerCreateUserPending(action: PayloadAction<UserUsedSignUp>) {
	const user: UserUsedSignUp = {
		name: '',
		userName: '',
		password: '',
		email: '',
		birthday: ''
	};
	try {
		const response: Promise<any> = yield call(createdUserApi, user);
	} catch (error) {}
}

export default function* watcherAuthUserPending() {
	yield takeEvery(authUserPending.type, workerCreateUserPending);
}

function* userSaga() {
	yield all([watcherAuthUserPending()]);
	
}
