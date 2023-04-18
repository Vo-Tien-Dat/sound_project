import React, { FC, Fragment, useState, memo, useEffect } from 'react';

import { RootState } from '../../../../app/store';
import { Grid } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from '../../../../app/reducers/searchSlice';
import Card from '../../../../components/Card';
import { Cards } from '../../../../components/Cards';
import {
	CARD_VIEW_NUMBER_XS,
	CARD_VIEW_NUMBER_SM,
	CARD_VIEW_NUMBER_MD,
	CARD_VIEW_NUMBER_LG,
	CARD_VIEW_NUMBER_XXL,
	CARD_VIEW_NUMBER_XL
} from '../../../../utils/constants/constant';
const { useBreakpoint } = Grid;
const Albums: FC = () => {
	const contents = useSelector<RootState, Content[] | undefined>(state => state.search.contents);
	const [numberCards, setNumberCards] = useState<number>(CARD_VIEW_NUMBER_XS);
	const screen = useBreakpoint();

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
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default Albums;
