import { createReducer, createSlice, CreateSliceOptions, PayloadAction } from '@reduxjs/toolkit';
import { isConstructorDeclaration } from 'typescript';
import { AudioProps } from '../../components/Audio/AudioProps';
export interface Audio {
	title: string;
	author: string;
	time: string | number;
	isFavorite: boolean;
}

const initialState: AudioProps[] = [
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	},
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	},
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	},
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	}
];

export const audioSlice = createSlice({
	name: 'audio',
	initialState: initialState,
	reducers: {
		getData: (state, action) => {
			console.log('oke');
		},

		startAddFavoriteAudio: (state, aciton: PayloadAction<any>) => {},
		addFavoriteSuccess: (state, action: PayloadAction<any>) => {},
		addFavorite: (state, action: PayloadAction<any>) => {
			const { index, heartStatus } = action.payload;
		}
	}
});

const { reducer, actions } = audioSlice;
export const { addFavorite, getData } = actions;
export default reducer;
