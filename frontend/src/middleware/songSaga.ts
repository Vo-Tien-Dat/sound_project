import { all } from 'axios';
import { takeEvery } from 'redux-saga/effects';
import { readSong } from '../app/reducers/songSlice';

export function* workerReadSongForUser() {
	try {
		
	} catch (error) {
	}
}

export function* watcherReadSongForUser() {
	yield takeEvery(readSong.type, workerReadSongForUser);
}

export function* watcherAllEventSong() {
	yield all([watcherReadSongForUser()]);
}
