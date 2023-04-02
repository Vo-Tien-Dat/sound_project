import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { Album } from '../../models/album';
import { playlist } from '../../models/playlist';
import { Song } from '../../models/song';
import { User } from '../../models/user';
import { CardsProps } from '../../components/Cards/CardsProps';
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
			songTime: '10:01'
		},
		{
			songId: '1',
			songSrcImage: '',
			songName: 'Light Switch',
			songAuthor: 'Charlie Puth',
			songTime: '10:01'
		},
		{
			songId: '2',
			songSrcImage: '',
			songName: 'Set time out',
			songAuthor: 'Adele',
			songTime: '10:01'
		},
		{
			songId: '3',
			songSrcImage: '',
			songName: 'Set time out',
			songAuthor: 'Vo Tien Dat',
			songTime: '10:01'
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
					userId: '1',
					userName: 'vo tien dat',
					password: 'hello',
					name: 'test',
					email: 'votiendat',
					birthday: 'test'
				}
			]
		}
	]
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		loadingData(state, action: PayloadAction<string>) {
			const songs = [
				{
					songId: '1',
					songSrcImage: '',
					songName: 'Light Switch',
					songAuthor: 'Charlie Puth',
					songTime: '10:01'
				},
				{
					songId: '1',
					songSrcImage: '',
					songName: 'Light Switch',
					songAuthor: 'Charlie Puth',
					songTime: '10:01'
				},
				{
					songId: '2',
					songSrcImage: '',
					songName: 'Set time out',
					songAuthor: 'Adele',
					songTime: '10:01'
				}
			];
		},
		toAddListSong(state, action: PayloadAction<any>) {},
		toAddAlbum(state, action: PayloadAction<any>) {}
	}
});

const { reducer, actions } = searchSlice;

export const { loadingData, toAddListSong, toAddAlbum } = actions;

export default reducer;
