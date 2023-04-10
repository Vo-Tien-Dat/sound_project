import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import './index.scss';

import { Avatar as AvatarAnt, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AvatarProps } from './AvatarProps';
import classNames from 'classnames';
import { is } from 'immer/dist/internal';
export const Avatar: FC<AvatarProps> = ({ avatarSrcImage, avatarName, menuItem }) => {
	const [isClosedMenu, setIsClosedMenu] = useState<boolean>(true);
	const avatarRef = useRef<HTMLInputElement>(null);

	const hanldeChangedMenuStatus = () => {
		setIsClosedMenu(!isClosedMenu);
	};

	const handleClickOutside = (event: any) => {
		const { target } = event;
		if (!avatarRef.current?.contains(target)) {
			setIsClosedMenu(true);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			console.log('remove');
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div ref={avatarRef} className="avatar-space">
			<div className="avatar-space__control" onClick={hanldeChangedMenuStatus}>
				<AvatarAnt icon={<UserOutlined />} className="avatar-space__image" />
				<Typography className="avatar-space__name">Title</Typography>
			</div>
			<div className={classNames('avatar-space__menu', { 'avatar-space__menu--active': !isClosedMenu })}>
				{menuItem !== undefined &&
					menuItem.map((currentValue: any, index: number) => {
						return <div className="avatar-space__menu-item">{currentValue}</div>;
					})}
			</div>
		</div>
	);
};
