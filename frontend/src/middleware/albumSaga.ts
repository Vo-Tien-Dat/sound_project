import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { readAlbum, addAlbumFavorite, updateAlbum } from '../app/reducers/albumSlice';

import { addAlbumFavorite as addAlbumFavoriteApi } from '../api/albumApi';
import { readAlbum as readAlbumApi } from '../api/albumApi';
import { Album } from '../models/album';

function* workerAddAudioFavoritePending(action: PayloadAction<Required<Pick<Album, 'albumId'>>>) {
	try {
		const {
			payload: { albumId }
		} = action;
		console.log(albumId);
	} catch (error) {}
}

function* watcherAddAlbumFavoritePending() {}
// use in album page
function* workerReadAlbumPending(action: PayloadAction<Required<Pick<Album, 'albumId'>>>) {
	try {
		const {
			payload: { albumId }
		} = action;

		const response: Promise<void> = yield call(readAlbumApi, albumId);
		yield put({
			type: updateAlbum.type,
			payload: response
		});
	} catch (error) {
		console.log(error);
	}
}

function* watcherReadAlbumPending() {}

export default function* albumSaga() {
	//yield takeEvery(addAlbumFavorite.type, workerAddAudioFavoritePending);

	yield takeEvery(readAlbum.type, workerReadAlbumPending);
}
