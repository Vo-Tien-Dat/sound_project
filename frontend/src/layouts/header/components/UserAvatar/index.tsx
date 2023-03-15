import React, { FC } from 'react';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';

import './index.scss';

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
	getItem('Navigation One', 'sub1', <MailOutlined />),
	getItem('Navigation Two', 'sub2', <AppstoreOutlined />),
	getItem('Navigation Three', 'sub4', <SettingOutlined />)
];

export const UserAvatar: FC = () => {
	return (
		<Space direction="vertical" size={'large'}>
			<Space>
				<Avatar size="large" icon={<UserOutlined />} />
			</Space>
			<Space>
				<Menu mode="inline" style={{ width: 256 }} items={items} />
			</Space>
		</Space>
	);
};
