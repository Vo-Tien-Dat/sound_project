import { createSlice } from '@reduxjs/toolkit';

interface Song {
	songName?: string;
	songSrcImage?: string;
	listener?: number;
	isFavorite?: boolean;
	songTime?: number | string;
	numberAlbum?: number;
}

interface SongForHome extends Song {}

interface SongForSearch extends Song {
	searchValue?: string | null;
}

interface SongForUser extends Song {
	numberAlbum?: number;
}

type SongProps = Song | SongForHome | SongForSearch | SongForUser;

const initialSong: SongProps[] = [
	{
		songName: 'Stranger By Nature',
		songSrcImage: 'ksdfjdskfjk',
		songTime: '19:08'
	},
	{
		songName: 'Stranger By Nature',
		songSrcImage: 'ksdfjdskfjk',
		songTime: '19:08'
	}
];

export const songSlice = createSlice({
	name: 'song',
	initialState: initialSong,
	reducers: {
		readSong: (state, action) => {},
		handleIsFavorite: (state, action) => {},
		readListSong: (state, action) => {}
	}
});
const { reducer, actions } = songSlice;
export const { readSong } = actions;

export default reducer;
