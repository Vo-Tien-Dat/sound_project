import { createSlice } from '@reduxjs/toolkit';

interface Auth {
	isLogging: boolean;
}

const initialState: Auth = {
	isLogging: false
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		isLogging: (state, action) => {},
		isLogOut: (state, action) => {}
	}
});

const { reducer, actions } = authSlice;

export const { isLogging, isLogOut } = actions;

export default reducer;
