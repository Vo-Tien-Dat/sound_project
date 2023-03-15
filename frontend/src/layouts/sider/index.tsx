import React, { FC, useState } from 'react';
import './index.scss';
import { ContainerOutlined, DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faBook } from '@fortawesome/free-solid-svg-icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { MenuItemProps } from '../../components/MenuItem/MenuItemProps';
import { Sider as ChildSider } from '../../components/Sider';

type MenuItemRequiredProps = Required<MenuItemProps>;

const menuItem: MenuItemProps[] = [
	{
		icon: <FontAwesomeIcon icon={faHouse} />,
		label: 'home',
		key: 1,
		url: 'home'
	},
	{
		icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
		label: 'Search',
		key: 2,
		url: 'search'
	},
	{
		icon: <FontAwesomeIcon icon={faBook} />,
		label: 'Library',
		key: 3,
		url: 'library'
	}
];

const Sider: FC<any> = () => {
	return (
		<>
			<br />
			<br />
			<br />
			<br />
			<br />
			<ChildSider items={menuItem} initKey={1} />
		</>
	);
};

export { Sider };
