import React, { FC, Fragment, ReactNode, CSSProperties, useState, useEffect } from 'react';
import './index.scss';
import classNames from 'classnames';
import { CardsProps } from './CardsProps';
import { Grid } from 'antd';
import {
	CARD_VIEW_NUMBER_XS,
	CARD_VIEW_NUMBER_SM,
	CARD_VIEW_NUMBER_MD,
	CARD_VIEW_NUMBER_LG,
	CARD_VIEW_NUMBER_XXL,
	CARD_VIEW_NUMBER_XL
} from '../../utils/constants/constant';
const defaultStyle: CSSProperties = {
	rowGap: 8,
	columnGap: 8,
	gridTemplateColumns: 8,
	gridTemplateRows: 1
};

const { useBreakpoint } = Grid;

export const Cards: FC<CardsProps> = ({ children, className, style, gapRow, col, row, gapCol }) => {
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

	return children !== undefined ? (
		<div
			style={style || {}}
			className={classNames(
				'ms-space-cards',
				className || {},
				`ms-grid-row-${row || defaultStyle.gridTemplateRows}`,
				`ms-grid-col-${col || cards}`,
				`ms-gap-col-${gapCol || defaultStyle.columnGap}`,
				`ms-gap-row-${gapRow || defaultStyle.rowGap}`
			)}
		>
			{children.map((currentElement: ReactNode, index: number) => {
				return (
					<div className="ms-space-card-item" key={index}>
						{currentElement}
					</div>
				);
			})}
		</div>
	) : (
		<Fragment />
	);
};
