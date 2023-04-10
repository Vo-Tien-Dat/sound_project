import React, { FC, Fragment, useEffect, useState } from 'react';
import { Space, Col, Row, Typography, Grid } from 'antd';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Song } from '../../models/song';
import { Song as SongComponent } from '../../components/Song';
import { loadingData } from '../../app/reducers/searchSlice';
import { TopResult } from '../../components/TopResult';
import { Content } from '../../app/reducers/searchSlice';
import { Cards } from '../../components/Cards';
import { Card } from '../../components/Card';
import { Songs as SongsComp } from '../../components/Songs';
import {
	CARD_VIEW_NUMBER_XS,
	CARD_VIEW_NUMBER_SM,
	CARD_VIEW_NUMBER_MD,
	CARD_VIEW_NUMBER_LG,
	CARD_VIEW_NUMBER_XXL,
	CARD_VIEW_NUMBER_XL
} from '../../utils/constants/constant';
const { useBreakpoint } = Grid;
export const Search: FC = () => {
	const screen = useBreakpoint();
	const songs = useSelector<RootState, any>(state => state.search.songs);
	const album = useSelector<RootState, any>(state => state.search.album);
	const topResult = useSelector<RootState, any>(state => state.search.topResult);
	const contents = useSelector<RootState, Content[] | undefined>(state => state.search.contents);
	const dispatch = useDispatch();
	const [numberCards, setNumberCards] = useState<number>(CARD_VIEW_NUMBER_XS);

	useEffect(() => {
		switch (true) {
			case screen['xs']:
				setNumberCards(CARD_VIEW_NUMBER_XS);
				break;
			case screen['xxl']:
				setNumberCards(CARD_VIEW_NUMBER_XXL);
				break;
			case screen['xl']:
				setNumberCards(CARD_VIEW_NUMBER_XL);
				break;
			case screen['lg']:
				setNumberCards(CARD_VIEW_NUMBER_LG);
				break;

			case screen['md']:
				setNumberCards(CARD_VIEW_NUMBER_MD);
				break;

			case screen['sm']:
				setNumberCards(CARD_VIEW_NUMBER_SM);
				break;
			default:
		}
	}, [screen]);
	useEffect(() => {
		dispatch(loadingData('test'));
	}, []);
	return (
		<div className="search-space">
			<div className="search-space__top-result">
				<div className="top-result__parent">
					<div className="top-result__label search__label">Top result</div>
					<div className="top-result__content">
						<TopResult />
					</div>
				</div>
			</div>
			<div
				className="search-space__song"
				style={numberCards <= CARD_VIEW_NUMBER_SM ? { gridColumn: 'span 5/ span 5' } : {}}
			>
				<div className="search-space__song-content">
					<div className="song-content__parent">
						<Typography className="song-content__label search__label">Song</Typography>
						<div
							className="song-content__content"
							style={{
								width: '100%!important'
							}}
						>
							<SongsComp>
								{songs.map((currentValue: Song, index: number) => {
									const { songId, songName, songAuthor, songTime } = currentValue;
									return (
										<div className="song-space-item" key={index}>
											<SongComponent
												songPosition={index}
												songName={songName}
												songTime={songTime}
											/>
										</div>
									);
								})}
							</SongsComp>
						</div>
					</div>
				</div>
			</div>

			<div className="search-space__main-content">
				<div className="main-content__parent">
					{contents !== undefined &&
						contents.map((contentValue: Content, index: number) => {
							const { label, cards } = contentValue;
							return (
								<div key={index} className="main-content__cards-item">
									<div className="cards-item__label search__label">{label}</div>
									<div className="cards-item__content">
										<Cards>
											{cards
												?.slice(0, Math.min(cards.length, numberCards))
												.map((value: any, index: number) => {
													const { albumName } = value;
													return <Card cardTitle={albumName} cardDetails={'test'} />;
												})}
										</Cards>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
