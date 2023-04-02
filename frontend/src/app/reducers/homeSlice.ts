import { createSlice } from '@reduxjs/toolkit';
import { Album } from '../../models/album';

export interface ContentState {
	name: string;
	albums: Album[];
}

interface HomeState {
	contents: Required<ContentState[]>;
}

const initialState: HomeState = {
	contents: [
		{
			name: 'Recently playeed',
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
			name: 'Recently playeed',
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
					albumName: "let's run ON thkkkkkkkkkkkdddddddde",
					albumAuthor: 'Cover: Jimin'
				}
			]
		},
		{
			name: 'Recently playeed',
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
					albumName: "let's run ON thkkkkkkkkkkkkkkkkdddddddde",
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
		loadingData: (state, action) => {}
	}
});

const { reducer, actions } = homeSlice;
export const { loadingData } = actions;
export default reducer;
