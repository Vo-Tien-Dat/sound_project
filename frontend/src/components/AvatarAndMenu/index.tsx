import React, { FC, useEffect, useRef, useState } from 'react';
import { Space } from 'antd';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import type { MenuProps } from 'antd';

import './index.scss';
import { UserAvatarAndName } from '../UserAvatarAndName';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('Settings', 'sub1', <FontAwesomeIcon icon={faGear} />),
	getItem('Log Out', 'sub2', <FontAwesomeIcon icon={faRightFromBracket} />)
];

export const AvatarAndMenu: FC = () => {
	const [isClosed, setIsClosed] = useState(true);

	const menuRef = useRef<HTMLDivElement>(null);

	const handleClickOutSide = () => {
		setIsClosed(!isClosed);
	};

	useEffect(() => {
		const handle = (event: any): void => {
			if (!menuRef.current?.contains(event.target)) {
				setIsClosed(true);
			}
		};
		document.addEventListener('mousedown', handle);
		return () => {
			document.removeEventListener('mousedown', handle);
		};
	}, [isClosed]);

	return (
		<div className="AvatarAndMenuSpaceRoot">
			<div ref={menuRef} onClick={handleClickOutSide} className="AvatarSpace">
				<Avatar size={48} icon={<UserOutlined />} />
			</div>
			<Space
				className="MenuSpace"
				direction="vertical"
				style={isClosed == true ? { display: 'none' } : { display: 'block' }}
			>
				{/* <UserAvatarAndName spacing={16} /> */}
				<Menu mode="inline" style={{ width: 256 }} items={items} />
			</Space>
		</div>
	);
};
