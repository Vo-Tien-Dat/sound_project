import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import { Avatar as AvatarAnt, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AvatarProps } from './AvatarProps';
import classNames from 'classnames';
export const Avatar: FC<AvatarProps> = ({ avatarSrcImage, avatarName, data }) => {
	const [isClosedMenu, setIsClosedMenu] = useState<boolean>(true);
	const avatarRef = useRef<HTMLInputElement>(null);

	const hanldeChangedMenuStatus = () => {
		console.log(isClosedMenu);
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
			<div className="avatar-space-control" onClick={hanldeChangedMenuStatus}>
				<AvatarAnt icon={<UserOutlined />} className="avatar-space__image" />
				<Typography className="avatar-space__name">Title</Typography>
			</div>
			{data && (
				<div className={classNames('avatar-space__menu', { 'avatar-space__menu--inactive': isClosedMenu })}>
					<div className="menu menu--light menu--rounded-1">
						{data !== undefined &&
							data.map((currentValue: any, index: number) => {
								return <div className="menu-item menu-item__hover--primary">{currentValue}</div>;
							})}
					</div>
				</div>
			)}
		</div>
	);
};
