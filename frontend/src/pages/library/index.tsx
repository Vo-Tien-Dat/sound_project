import React, { FC, useEffect } from 'react';

import { Typography, Grid } from 'antd';
import './index.scss';
import Card from '../../components/Card';

const { useBreakpoint } = Grid;

export const Library: FC = () => {
	const screen = useBreakpoint();

	useEffect(() => {}, [screen]);

	return (
		<div className="library-space">
			<div className="content__title content__title--primary">Title</div>
			<div className="library__content">
				<div className="library__content--song"></div>
				<Card cardTitle={'hello ksdfjdfld jdjdj'}></Card>
				<Card cardTitle={'hello world'}></Card>
				<Card cardTitle={'hello world'}></Card>
				<Card cardTitle={'hello world'}></Card>
				<Card cardTitle={'hello world'}></Card>
				<Card cardTitle={'hello world'}></Card>
			</div>
		</div>
	);
};
