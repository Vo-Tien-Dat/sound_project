import React, { FC, useState, useEffect } from 'react';
import { Layout, Space, Typography, Grid } from 'antd';

import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { current } from '@reduxjs/toolkit';
import { ContentState } from '../../app/reducers/homeSlice';
import { Card } from '../../components/Card';
import { Album } from '../../models/album';
import Math from '../../utils/constants/math';
import {
	CARD_VIEW_NUMBER_XS,
	CARD_VIEW_NUMBER_SM,
	CARD_VIEW_NUMBER_MD,
	CARD_VIEW_NUMBER_LG,
	CARD_VIEW_NUMBER_XXL,
	CARD_VIEW_NUMBER_XL
} from '../../utils/constants/constant';
const { useBreakpoint } = Grid;
const Home: FC = () => {
	const contents = useSelector<RootState, any>(state => state.home.contents);
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

	return (
		<Space direction="vertical" className="HomeSpace">
			{contents.map((currentValue: ContentState, index: number) => {
				const { name, albums } = currentValue;
				const albumsLen: number = albums.length || 0;
				const hideExpandedContent: boolean = albumsLen > cards;
				return (
					<Space key={index} direction="vertical" className="home-content">
						<Space direction="horizontal" className="home-content__header">
							<Typography className="home-content__title">{name}</Typography>
							{hideExpandedContent && (
								<Typography>
									<a href="" className="home-content__expanded">
										See All
									</a>
								</Typography>
							)}
						</Space>
						<Space
							className="home-content__content"
							style={{
								display: 'grid',
								gridTemplateColumns: `repeat(${cards}, minmax(0,1fr))`
							}}
						>
							{albums.map((currentValue: Album, index: number) => {
								const { albumId, albumName, albumAuthor } = currentValue;

								return (
									index < Math.min(cards, albums.length) && (
										<div className="ms-space-item-card">
											<Card cardTitle={albumName} />
										</div>
									)
								);
							})}
						</Space>
					</Space>
				);
			})}
		</Space>
	);
};

export { Home };
