import React, { FC } from 'react';
import './index.scss';
import { Space } from 'antd';
import { Card } from '../Card';

export const Cards: FC = () => {
	return (
		<Space className="CardsSpace">
			<Card cardTitle="adele" shape="circle" />
			<Card cardTitle="adele" shape="circle" />
			<Card cardTitle="adele" shape="circle" />
			<Card cardTitle="adele" shape="circle" />
			<Card cardTitle="adele" shape="circle" />
		</Space>
	);
};
