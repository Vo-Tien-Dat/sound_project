import React, { useState, FC } from 'react';
import { Layout, Grid } from 'antd';
import './index.scss';
import { Sider as SiderCustomize } from '../sider';
import { Header as HeaderCustomize } from '../header';
import { Home } from '../../pages/home';
import { Search } from '../../pages/search';
import { Outlet } from 'react-router-dom';
import { SongDisplay } from '../../components/SongDisplay';
import { RootProps } from './RootProps';
const { Header, Footer, Sider, Content } = Layout;

const { useBreakpoint } = Grid;

const DefaultProps: RootProps = {
	isHiddenHeader: true
};

const Root: FC<RootProps> = props => {
	const screens = useBreakpoint();
	const laptopScreen = screens['lg'] || screens['xl'] || screens['xxl'];

	const { isHiddenHeader } = { ...props, ...DefaultProps };
	return (
		<>
			{laptopScreen ? (
				<Layout className="RootLayoutOverride">
					<Sider>
						<SiderCustomize />
					</Sider>
					<Layout className="HeaderAndContentLayoutOverride">
						<Header className="HeaderLayoutOverride" style={isHiddenHeader ? { display: 'none' } : {}}>
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
						<Content>
							<Outlet />
						</Content>
						<Footer>Footer</Footer>
					</Layout>
				</Layout>
			)}
		</>
	);
};

export default Root;
