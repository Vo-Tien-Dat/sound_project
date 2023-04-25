import React, { FC, useEffect, useState, Fragment } from 'react';
import { Typography, Grid } from 'antd';
import './index.scss';
import { useDispatch } from 'react-redux';
import { loadingData } from '../../app/reducers/searchSlice';

import Songs from './components/Songs';
import Albums from './components/Albums';
import useAuth from '../../hooks/useAuth';
import { KEY_ACCESS_TOKEN } from '../../constant/constant';

const { useBreakpoint } = Grid;
export const Search: FC = () => {
	const dispatch = useDispatch();

	const handleStorageChange = (event: StorageEvent) => {
		console.log(event['key']);
		console.log('oke');
		if (event['key'] === 'access_token') {
			console.log(localStorage.getItem('access_token'));
		}
	};
	addEventListener('storage', handleStorageChange);

	return (
		<div className="search-space">
			<div className="search-space__top-result">
				<div className="top-result__parent">
					<div className="content__title content__title--primary">Top result</div>
					<div className="top-result__content">{/* <TopResult /> */}</div>
				</div>
			</div>
			<div className="search-space__song">
				<div className="search-space__song-content">
					<div className="song-content__parent">
						<Typography className="content__title content__title--primary">Song</Typography>
						<div className="song-content__content">
							<Songs />
						</div>
					</div>
				</div>
			</div>

			<div className="search-space__main-content">
				<div className="main-content__parent">
					<Albums />
				</div>
			</div>
		</div>
	);
};
