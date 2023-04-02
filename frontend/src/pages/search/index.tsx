import React, { FC, useEffect, useState } from 'react';
import { Space, Col, Row, Typography, Grid } from 'antd';
import './index.scss';
import { Audios } from './components/Audios';
import { AudioProps } from '../../components/Audio/AudioProps';
import { Cards } from '../../components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { audioSlice } from '../../app/reducers/audioSlice';
import { RootState } from '../../app/store';
import { Song } from '../../models/song';
import { Song as SongComponent } from '../../components/Song';
import { loadingData } from '../../app/reducers/searchSlice';
import { TopResult } from '../../components/TopResult';
import { Content } from '../../app/reducers/searchSlice';
import type { Card as CardProps } from '../../app/reducers/searchSlice';
import { Card as CardComp } from '../../components/Card';
import { Album } from '../../models/album';
import { User } from '../../models/user';
const { useBreakpoint } = Grid;
export const Search: FC = () => {
	const screen = useBreakpoint();
	const songs = useSelector<RootState, any>(state => state.search.songs);
	const album = useSelector<RootState, any>(state => state.search.album);
	const topResult = useSelector<RootState, any>(state => state.search.topResult);
	const contents = useSelector<RootState, Content[] | undefined>(state => state.search.contents);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadingData('test'));
	}, []);

	return (
		<div className="search-space">
			<div className="search-space__top-result">
				<Typography className="search__label">Top result</Typography>
				<TopResult />
			</div>

			<div className="search-space__song">
				<div className="search-space__song-content">
					<Typography className="search__label">Song</Typography>
					<div
						className="song-space"
						style={{
							width: '100%!important'
						}}
					>
						{songs.map((currentValue: Song, index: number) => {
							const { songId, songName, songAuthor, songTime } = currentValue;
							return (
								<div className="song-space-item" key={index}>
									<SongComponent songPosition={index} songName={songName} songTime={songTime} />
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className="search-space__other-content">
				{contents !== undefined &&
					contents.map((contentValue: Content, index: number) => {
						const { label, cards } = contentValue;
						return (
							<div key={index} className="search-space__other-content--item">
								<div className="search-space__other-content--item label">{label}</div>
								<div
									className="search-space__other-content--item content"
									style={{
										display: 'grid',
										gridTemplateColumns: 'repeat(5, minmax(0, 1fr))'
									}}
								>
									{cards !== undefined &&
										cards.map((cardValue: CardProps, index: number) => {
											const { userName }: any = cardValue;
											const { albumName }: any = cardValue;
											console.log(cardValue);
											const { cardTitle } = {
												['cardTitle']: albumName | userName
											};
											return (
												<div className="ms-space-item-card">
													<CardComp cardTitle={'hello world'} />
												</div>
											);
										})}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};
