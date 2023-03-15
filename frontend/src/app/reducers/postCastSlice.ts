import { createSlice } from '@reduxjs/toolkit';

interface PostCast {
	name: string;
	author: string;
}

const initialState: PostCast = {
	name: 'postcast',
	author: 'authod postcast'
};

export const postCastSlice = createSlice({
	name: 'postcast',
	initialState,
	reducers: {}
});
