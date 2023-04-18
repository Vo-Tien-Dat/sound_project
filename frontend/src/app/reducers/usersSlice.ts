import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_DATA_TYPE_STRING_EMPTY } from '../../constant/constant';
const initialState: any = {
	srcImage: DEFAULT_DATA_TYPE_STRING_EMPTY,
	name: DEFAULT_DATA_TYPE_STRING_EMPTY,
	isFollowed: false,
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
