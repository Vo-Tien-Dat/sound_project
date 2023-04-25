import React, { FC, ReactNode, memo } from 'react';

import { Typography, Skeleton } from 'antd';
import { Image } from 'antd';
import { CardPropsPreview, CardRequiredProps } from './CardRequiredProps';

const square: string[] = ['square', 'undefined'];

const Card: FC<CardPropsPreview> = props => {
	const { skeleton, skeletonActive, cardTitle, shape, srcImage, cardDetails } = { ...CardRequiredProps, ...props };
	return (
		<div className="card">
			{(skeleton === true && (
				<Skeleton.Avatar
					active={skeletonActive}
					style={{
						width: '100%',
						paddingTop: '100%',
						borderRadius: '8px'
					}}
					shape="square"
				></Skeleton.Avatar>
			)) ||
				(srcImage !== undefined && (
					<img
						style={{
							zIndex: '0'
						}}
						className="card__image"
						alt=""
					/>
				)) || (
					<Skeleton.Avatar
						active={skeletonActive}
						style={{
							width: '100%',
							paddingTop: '100%',
							borderRadius: '8px'
						}}
						shape="square"
					></Skeleton.Avatar>
				)}
			<div className="card__content">
				{cardTitle !== undefined && skeleton !== true ? (
					<Typography className="card__title">{cardTitle}</Typography>
				) : (
					<Skeleton.Input
						active={skeletonActive}
						style={{
							borderRadius: '16px',
							width: '100%'
						}}
						size="small"
					></Skeleton.Input>
				)}
				{cardDetails !== undefined && skeleton !== true ? (
					<Typography className="card__details">{cardDetails}</Typography>
				) : (
					<Skeleton.Input
						style={{
							borderRadius: '16px'
						}}
						active={skeletonActive || false}
						size="small"
					></Skeleton.Input>
				)}
			</div>
		</div>
	);
};

export default Card;
