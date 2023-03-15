import { createSlice } from '@reduxjs/toolkit';
import { playlist } from '../../models/playlist';

const initialPlaylist: playlist[] = [
	{
		playlistId: 'playlist1',
		playlistName: 'vo tien dat',
		playlistAuthor: 'Adele',
		playlistSrcImage: 'kadfjakjdfka'
	},
	{
		playlistId: 'playlist1',
		playlistName: 'vo tien dat',
		playlistAuthor: 'Adele',
		playlistSrcImage: 'kadfjakjdfka'
	},
	{
		playlistId: 'playlist1',
		playlistName: 'vo tien dat',
		playlistAuthor: 'Adele',
		playlistSrcImage: 'kadfjakjdfka'
	},
	{
		playlistId: 'playlist1',
		playlistName: 'vo tien dat',
		playlistAuthor: 'Adele',
		playlistSrcImage: 'kadfjakjdfka'
	},
	{
		playlistId: 'playlist1',
		playlistName: 'vo tien dat',
		playlistAuthor: 'Adele',
		playlistSrcImage: 'kadfjakjdfka'
	}
];

export const playlistSlice = createSlice({
	name: 'playlist',
	initialState: initialPlaylist,
	reducers: {
		readPlaylist: (state, action) => {},
		addPlaylistFavorite: (state, action) => {},
		removePlaylistFavorite: (state, action) => {}
	}
});

const { reducer, actions } = playlistSlice;
export const { readPlaylist } = actions;

export default reducer;
