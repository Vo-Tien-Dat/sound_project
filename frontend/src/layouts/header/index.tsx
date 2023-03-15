import React from 'react';
import './index.scss';
import { UserOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Space, Grid, Typography } from 'antd';
import { AvatarAndMenu } from '../../components/AvatarAndMenu';
import { Search } from '../../components/Search';
const { useBreakpoint } = Grid;

const Header: React.FC = () => {
	const screens = useBreakpoint();
	const laptopScreen = screens['lg'] || screens['xl'] || screens['xxl'];

	return (
		<>
			{laptopScreen ? (
				<Space direction="horizontal" align="center" className="HeaderSpace">
					<Search />
				</Space>
			) : (
				<Space></Space>
			)}
		</>
	);
};
export { Header };
