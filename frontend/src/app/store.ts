import { configureStore } from '@reduxjs/toolkit';
import audioSlice from './reducers/audioSlice';
import albumSlice from './reducers/albumSlice';
import userSlice from './reducers/userSlice';
import authSlice from './reducers/authSlice';
import songSlice from './reducers/songSlice';
import playlistSlice from './reducers/playlistSlice';
import searchSlice from './reducers/searchSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../middleware/rootSaga';
import homeSlice from './reducers/homeSlice';
import usersSlice from './reducers/usersSlice';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		audio: audioSlice,
		album: albumSlice,
		user: userSlice,
		auth: authSlice,
		song: songSlice,
		playlist: playlistSlice,
		search: searchSlice,
		home: homeSlice,
		users: usersSlice
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
