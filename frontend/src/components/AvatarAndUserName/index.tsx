import React, { FC } from 'react';
import { Avatar, Typography } from 'antd';
import { AvatarAndUserNameProps } from './AvatarAndUserNameProps';
import { useNavigate } from 'react-router-dom';
import './index.scss';
const DefaultAvatarAndUserName: Required<AvatarAndUserNameProps> = {
	name: 'name',
	srcImage: '',
	gap: 8,
	sizeImage: 24,
	sizeText: 16,
	url: '#'
};

export const AvatarAndUserName: FC<AvatarAndUserNameProps> = props => {
	const { sizeImage, sizeText, gap, name, url } = { ...DefaultAvatarAndUserName, ...props };
	const nagivate = useNavigate();

	const handleRedirection = () => {
		if (url !== '#') {
			nagivate(url);
		}
	};

	return (
		<div
			className="AvatarAndUserNameContainer"
			style={{
				gap: `${gap}px`
			}}
		>
			<Avatar shape="circle" size={sizeImage} />
			<Typography
				onClick={handleRedirection}
				className="AvatarAndUserNameTypography"
				style={{
					fontSize: `${sizeText}px`
				}}
			>
				{name}
			</Typography>
		</div>
	);
};
