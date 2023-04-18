import React from 'react';
import './index.scss';
import { UserOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Space, Grid, Typography } from 'antd';
import { AvatarAndMenu } from '../../components/AvatarAndMenu';
import { Search } from '../../components/Search';
import { Avatar } from '../../components/Avatar';
const { useBreakpoint } = Grid;

const menuItem: string[] = ['hello world', 'test ', 'hello world', 'test', 'test', 'test'];

const Header: React.FC = () => {
	const screens = useBreakpoint();
	const laptopScreen = screens['lg'] || screens['xl'] || screens['xxl'];
	1;
	return (
		<>
			{laptopScreen ? (
				<div className="ms-header-space">
					<div className="ms-header-space__search">
						<Search />
					</div>
					<div className="ms-header-space__avatar">{/* <Avatar menuItem={menuItem} /> */}</div>
				</div>
			) : (
				<Space></Space>
			)}
		</>
	);
};
export { Header };
