import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { searchApi } from '../api/searchApi';
import {
	loadingData,
	toAddAlbum,
	toAddFavoriteSong,
	toAddListSong,
	toUpdateFavoriteSong
} from '../app/reducers/searchSlice';
import { Song } from '../models/song';

export function* watcherLoadingData(action: PayloadAction<string>) {
	try {
	} catch (error) {}
}

export function* watcherAddFavoriteSong(action: PayloadAction<string>) {
	const { payload } = action;
	const { song_id, heart_status }: any = payload;

	if (song_id !== undefined || song_id !== null) {
		yield put({
			type: toUpdateFavoriteSong.type,
			payload: {
				song_id: song_id,
				heart_status: heart_status
			}
		});
	}
}

export default function* rootLoadingData() {
	yield takeEvery(loadingData.type, watcherLoadingData);
	yield takeEvery(toAddFavoriteSong.type, watcherAddFavoriteSong);
}
