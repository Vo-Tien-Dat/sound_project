import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Album, AlbumSong } from '../../models/album';

const initialState: Required<Album[] | AlbumSong> = [
	{
		albumId: 'ksdfkdjfj',
		albumName: '30',
		albumAuthor: 'Adele'
	},
	{
		albumId: 'ksdfkdjfj',
		albumName: '30',
		albumAuthor: 'Adele'
	},
	{
		albumId: 'ksdfkdjfj',
		albumName: '30',
		albumAuthor: 'Adele'
	}
];
export const albumSlice = createSlice({
	name: 'album',
	initialState,
	reducers: {
		readAlbum: (state, action: PayloadAction<any>) => {},
		addAlbum: (state, action) => {},
		addAlbumFavorite: (state, action: PayloadAction<Required<Pick<Album, 'albumId'>>>) => {},
		updateAlbum: (state, action: PayloadAction<any>) => {
			const { payload } = action;
			state[0].albumId = 'test'; 
		}
	}
});

const { reducer, actions } = albumSlice;
export const { readAlbum, addAlbum, addAlbumFavorite, updateAlbum } = actions;
export default reducer;
