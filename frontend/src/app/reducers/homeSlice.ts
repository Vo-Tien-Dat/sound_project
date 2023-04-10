import { createSlice } from '@reduxjs/toolkit';
import { Album } from '../../models/album';
import { current } from '@reduxjs/toolkit';
import { stat } from 'fs';

export interface ContentState {
	title: string;
	albums: Album[];
}

interface HomeState {
	contents: Required<ContentState[]>;
}

const initialState: HomeState = {
	contents: [
		{
			title: 'Recently playeed',
			albums: [
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				}
			]
		},
		{
			title: 'Recently playeed',
			albums: [
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON thkkkkkkkkk",
					albumAuthor: 'Cover: Jimin'
				}
			]
		},
		{
			title: 'Recently playeed',
			albums: [
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON the movement",
					albumAuthor: 'Cover: Jimin'
				},
				{
					albumId: '1',
					albumName: "let's run ON thde",
					albumAuthor: 'Cover: Jimin'
				}
			]
		}
	]
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		loadingDataPending: (state, action) => {},

		loadingDataSuccess: (state, action) => {
			const { payload } = action;
			state.contents = payload.contents;
		},

		loadingDataError: (state, action) => {}
	}
});

const { reducer, actions } = homeSlice;
export const { loadingDataPending, loadingDataSuccess, loadingDataError } = actions;
export default reducer;
