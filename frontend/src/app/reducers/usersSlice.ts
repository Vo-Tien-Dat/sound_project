import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
	srcImage: '',
	name: 'Adele',
	isFollowed: true,
	songs: [],
	albums: [],
	playlists: []
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		loadingData: (state, actions) => {},
		loadingDataSuccess: (state, action) => {
			const { payload } = action;
			state.srcImage = payload.srcImage;
			state.name = payload.name;
			state.songs = payload.songs;
			state.albums = payload.albums;
			state.playlists = payload.playlists;
			state.isFollowed = payload.isFollowed;
		},
		loadingDataError: (state, action) => {}
	}
});

const { reducer, actions } = usersSlice;

export const { loadingData, loadingDataSuccess, loadingDataError } = actions;

export default reducer;
