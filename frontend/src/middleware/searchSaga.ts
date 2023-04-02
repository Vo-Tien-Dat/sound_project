import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { searchApi } from '../api/searchApi';
import { loadingData, toAddAlbum, toAddListSong } from '../app/reducers/searchSlice';
import { Song } from '../models/song';

export function* workerLoadingData(action: PayloadAction<string>) {
	console.log(action); 
	console.log('oke');
	try {
		console.log('run worker loading data');
	} catch (error) {
		console.log(error);
	}
}

export default function* watcherLoadingData() {
	takeEvery(loadingData.type, workerLoadingData);
	put({
		type: loadingData.type,
		payload: [
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
		]
	});
}
