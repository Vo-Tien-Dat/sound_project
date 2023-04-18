import { createSlice } from '@reduxjs/toolkit';
import { StringGradients } from 'antd/es/progress/progress';

interface Auth {
	logging_success_status: boolean;
	isLogging: boolean;
	error_message: string;
	success_message: string;
}

const initialState: Auth = {
	logging_success_status: false,
	isLogging: false,
	success_message: 'login success',
	error_message: ''
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		isLogging: (state, action) => {},
		isLogOut: (state, action) => {},
		isLoggingStatus: (state, action) => {
			const { payload } = action;
			state.logging_success_status = payload.logging_success_status;
			state.error_message = payload.success_message;
		}
	}
});

const { reducer, actions } = authSlice;

export const { isLogging, isLogOut, isLoggingStatus } = actions;

export default reducer;
