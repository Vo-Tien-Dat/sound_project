import { PayloadAction } from '@reduxjs/toolkit';
import { all } from 'axios';
import { takeEvery, call } from 'redux-saga/effects';
import { addFavorite, Audio } from '../app/reducers/audioSlice';

function* updateAudioFavorite(action: PayloadAction<any>) {
	try {
		
	} catch (error) {
	}
}

export default function* watcherAddAudioFavorite() {
	yield takeEvery(addFavorite.type, updateAudioFavorite);
}
