import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/user';

const initialUserState: User = {};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		createUserPending: (state, action) => {
			console.log(action);
		},
		createUserSuccess: (state, action) => {},
		createUserError: (state, action) => {},
		authUserPending: (state, action) => {},
		authUserError: (state, action) => {},
		/*Logging user is successful */
		authUserSuccess: (state, action) => {},

		/* followed the others */
		addFollowedUser: (state, action) => {},
		removeFollowedUser: (state, action) => {}
	}
});

export const { actions, reducer } = userSlice;
export const {
	createUserPending,
	createUserSuccess,
	createUserError,
	authUserPending,
	authUserSuccess,
	authUserError
} = actions;
export default reducer;
