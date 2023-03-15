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
		<Space className="CardSpace">
			<Image
				preview={false}
				className={`Image ${(typeof shape).includes('square', undefined) ? 'square' : 'circle'}`}
				src={srcImage}
			/>
			<Typography className="Title">{cardTitle}</Typography>
			<Space className="Content">
				{/* {typeof props.children === 'string' ? <Typography>{children}</Typography> : <>{children}</>} */}
			</Space>
		</Space>
	);
};
