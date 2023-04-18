import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { Album } from '../../models/album';
import { playlist } from '../../models/playlist';
import { Song } from '../../models/song';
import { User } from '../../models/user';

export type Card = Album | User;

export interface Content {
	label?: string;
	cards?: Required<Card>[];
}

export interface SearchState {
	topResult?: Song | Album | User;
	songs?: Song[] | undefined;
	album?: Album[];
	playlist?: playlist[];
	contents?: Content[];
}

const initialState: SearchState = {
	topResult: {
		name: 'Adele'
	},
	songs: [
		{
			songId: '1',
			songSrcImage: '',
			songName: 'Light Switch',
			songAuthor: 'Charlie Puth',
			songTime: '10:01',
			isHeart: false
		},
		{
			songId: '2',
			songSrcImage: '',
			songName: 'Light Switch',
			songAuthor: 'Charlie Puth',
			songTime: '10:01',
			isHeart: true
		},
		{
			songId: '3',
			songSrcImage: '',
			songName: 'Set time out',
			songAuthor: 'Adele',
			songTime: '10:01',
			isHeart: false
		},
		{
			songId: '4',
			songSrcImage: '',
			songName: 'Set time out',
			songAuthor: 'Vo Tien Dat',
			songTime: '10:01',
			isHeart: false
		}
	],
	contents: [
		{
			label: 'Album',
			cards: [
				{
					albumId: '1',
					albumAuthor: '2',
					albumSrcImage: '1',
					albumName: 'vo tien dat',
					albumNumberSong: 10,
					isLiked: true
				},
				{
					albumId: '1',
					albumAuthor: '2',
					albumSrcImage: '1',
					albumName: 'vo tien dat',
					albumNumberSong: 10,
					isLiked: true
				},
				{
					albumId: '1',
					albumAuthor: '2',
					albumSrcImage: '1',
					albumName: 'vo tien dat',
					albumNumberSong: 10,
					isLiked: true
				},
				{
					albumId: '1',
					albumAuthor: '2',
					albumSrcImage: '1',
					albumName: 'vo tien dat',
					albumNumberSong: 10,
					isLiked: true
				},
				{
					albumId: '1',
					albumAuthor: '2',
					albumSrcImage: '1',
					albumName: 'vo tien dat',
					albumNumberSong: 10,
					isLiked: true
				},
				{
					albumId: '1',
					albumAuthor: '2',
					albumSrcImage: '1',
					albumName: 'vo tien dat',
					albumNumberSong: 10,
					isLiked: true
				}
			]
		},
		{
			label: 'Album',
			cards: [
				{
					albumId: '1',
					albumAuthor: '2',
					albumSrcImage: '1',
					albumName: 'vo tien dat',
					albumNumberSong: 10,
					isLiked: true
				},
				{
					albumId: '1',
					albumAuthor: '2',
					albumSrcImage: '1',
					albumName: 'vo tien dat',
					albumNumberSong: 10,
					isLiked: true
				}
			]
		}
	]
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		loadingData(state, action: PayloadAction<string>) {},
		toAddListSong(state, action: PayloadAction<any>) {},
		toAddAlbum(state, action: PayloadAction<string>) {},
		toAddFavoriteSong(state, action: PayloadAction<any>) {},
		toUpdateFavoriteSong(state, action: PayloadAction<any>) {
			const { payload } = action;
			const { song_id, heart_status } = payload;
			const songIndex = state.songs?.findIndex((value: any) => value.songId === song_id);
			if (state.songs !== undefined && songIndex !== undefined && songIndex !== -1) {
				state.songs[songIndex].isHeart = heart_status;
			}
		}
	}
});

const { reducer, actions } = searchSlice;

export const { loadingData, toAddListSong, toAddAlbum, toAddFavoriteSong, toUpdateFavoriteSong } = actions;

export default reducer;
