import React, { FC, useEffect, useState, Fragment } from 'react';
import { Typography, Grid } from 'antd';
import './index.scss';
import { useDispatch } from 'react-redux';
import { loadingData } from '../../app/reducers/searchSlice';

import Songs from './components/Songs';
import Albums from './components/Albums';

const { useBreakpoint } = Grid;
export const Search: FC = () => {
	const dispatch = useDispatch();

	return (
		<div className="search-space">
			<div className="search-space__top-result">
				<div className="top-result__parent">
					<div className="top-result__label search__label">Top result</div>
					<div className="top-result__content">{/* <TopResult /> */}</div>
				</div>
			</div>
			<div className="search-space__song">
				<div className="search-space__song-content">
					<div className="song-content__parent">
						<Typography className="song-content__label search__label">Song</Typography>
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
