import React, { FC, ReactNode } from 'react';

import { CardProps, Space, Typography } from 'antd';
import './index.scss';
import { Avatar } from 'antd';
import { Image } from 'antd';
import { CardPropsPreview, CardRequiredProps } from './CardRequiredProps';

const CardComponentChildren: FC<any> = (children: any) => {
	return typeof children === 'string' ? <Typography>{children}</Typography> : <>{children}</>;
};

const square: string[] = ['square', 'undefined'];

export const Card: FC<CardPropsPreview> = props => {
	const { cardTitle, shape, srcImage } = { ...CardRequiredProps, ...props };
	return (
		<Space className="card">
			<Image
				preview={false}
				//className={`Image ${(typeof shape).includes('square', undefined) ? 'square' : 'circle'}`}
				className="card__image"
				src={srcImage}
			/>
			<Space direction="vertical" className="card__content">
				<Space className="card__title">
					<Typography className="card__title card__title--typography">{cardTitle}</Typography>
				</Space>
				<Space>
					<Typography className="card__details">ddddddddddddd</Typography>
				</Space>
			</Space>
		</Space>
	);
};
