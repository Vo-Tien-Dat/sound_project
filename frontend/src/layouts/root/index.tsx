import React, { useState } from 'react';
import { Layout, Grid } from 'antd';
import './index.scss';
import { Sider as SiderCustomize } from '../sider';
import { Header as HeaderCustomize } from '../header';
import { Home } from '../../pages/home';
import { Search } from '../../pages/search';
import { Outlet } from 'react-router-dom';
import { SongDisplay } from '../../components/SongDisplay';
const { Header, Footer, Sider, Content } = Layout;

const { useBreakpoint } = Grid;

const Root: React.FC = () => {
	const screens = useBreakpoint();
	const laptopScreen = screens['lg'] || screens['xl'] || screens['xxl'];

	return (
		<>
			{laptopScreen ? (
				<Layout className="RootLayoutOverride">
					<Sider>
						<SiderCustomize />
					</Sider>
					<Layout className="HeaderAndContentLayoutOverride">
						<Header className="HeaderLayoutOverride">
							<HeaderCustomize />
						</Header>
						<Content className="ContentLayoutOverride">
							<Outlet />
						</Content>
					</Layout>
					{/* <SongDisplay></SongDisplay> */}
				</Layout>
			) : (
				<Layout>
					<Layout>
						<Header>Header</Header>
						<Content>Content</Content>
						<Footer>Footer</Footer>
					</Layout>
				</Layout>
			)}
		</>
	);
};

export default Root;
