import { configureStore } from '@reduxjs/toolkit';
import audioSlice from './reducers/audioSlice';
import albumSlice from './reducers/albumSlice';
import userSlice from './reducers/userSlice';
import authSlice from './reducers/authSlice';
import  songSlice  from './reducers/songSlice';
import playlistSlice from './reducers/playlistSlice'; 
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../middleware/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		audio: audioSlice,
		album: albumSlice,
		user: userSlice,
		auth: authSlice,
		song: songSlice,
		playlist: playlistSlice
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
