import React, { FC, useState, useEffect } from 'react';
import { Layout, Space, Typography, Grid } from 'antd';

import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { ContentState } from '../../app/reducers/homeSlice';
import Card from '../../components/Card';
import { Album } from '../../models/album';
import Math from '../../utils/constants/math';
import { loadingDataPending } from '../../app/reducers/homeSlice';
import {
	CARD_VIEW_NUMBER_XS,
	CARD_VIEW_NUMBER_SM,
	CARD_VIEW_NUMBER_MD,
	CARD_VIEW_NUMBER_LG,
	CARD_VIEW_NUMBER_XXL,
	CARD_VIEW_NUMBER_XL
} from '../../utils/constants/constant';
import { Cards } from '../../components/Cards';
const { useBreakpoint } = Grid;
const Home: FC = () => {
	const contents = useSelector<RootState, any>(state => state.home.contents);
	const dispatch = useDispatch();
	const [cards, setCards] = useState<number>(CARD_VIEW_NUMBER_XS);
	const screen = useBreakpoint();
	useEffect(() => {
		switch (true) {
			case screen['xs']:
				setCards(CARD_VIEW_NUMBER_XS);
				break;
			case screen['xxl']:
				setCards(CARD_VIEW_NUMBER_XXL);
				break;
			case screen['xl']:
				setCards(CARD_VIEW_NUMBER_XL);
				break;
			case screen['lg']:
				setCards(CARD_VIEW_NUMBER_LG);
				break;

			case screen['md']:
				setCards(CARD_VIEW_NUMBER_MD);
				break;

			case screen['sm']:
				setCards(CARD_VIEW_NUMBER_SM);
				break;
			default:
		}
	}, [screen]);
	useEffect(() => {
		const test = 'test';
		dispatch(loadingDataPending({ test }));
	}, []);

	return (
		<div className="ms-home-space">
			{contents.map((currentValue: ContentState, index: number) => {
				const { title, albums } = currentValue;
				const albumsLen: number = albums.length || 0;
				const hideExpandedContent: boolean = albumsLen > cards;
				return (
					<div key={index} className="ms-home-content">
						<Space direction="horizontal" className="ms-home-content__header">
							<Typography className="ms-home-content__title">{title}</Typography>
							{hideExpandedContent && (
								<Typography>
									<a href="" className="ms-home-content__expanded">
										See All
									</a>
								</Typography>
							)}
						</Space>

						<Cards col={5}>
							{albums.map((currentValue: Album, index: number) => {
								const { albumId, albumName, albumAuthor } = currentValue;
								return (
									index < Math.min(cards, albums.length) && (
										<Card cardTitle={albumName} cardDetails={albumAuthor} />
									)
								);
							})}
						</Cards>
					</div>
				);
			})}
		</div>
	);
};

export { Home };
