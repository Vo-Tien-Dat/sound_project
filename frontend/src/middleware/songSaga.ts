import { all } from 'axios';
import { takeEvery } from 'redux-saga/effects';
import { readSong } from '../app/reducers/songSlice';

export function* workerReadSongForUser() {
	try {
	} catch (error) {}
}

export default function* watcherReadSongForUser() {
	console.log('run song saga');
	yield takeEvery(readSong.type, workerReadSongForUser);
}
