import React, { useState, FC } from 'react';
import { Layout, Grid } from 'antd';
import './index.scss';
import { Sider as SiderComp } from '../sider';
import { Header as HeaderComp } from '../header';
import { Home } from '../../pages/home';
import { Search } from '../../pages/search';
import { Outlet, useOutletContext } from 'react-router-dom';
import { SongDisplay } from '../../components/SongDisplay';
import { RootProps } from './RootProps';
const { Header, Footer, Sider, Content } = Layout;

const { useBreakpoint } = Grid;

const DefaultProps: RootProps = {
	isHiddenHeader: true
};

type contextType = boolean;

export function useHeader() {
	return useOutletContext<contextType>();
}

const Root: FC<RootProps> = props => {
	const screens = useBreakpoint();
	const laptopScreen = screens['lg'] || screens['xl'] || screens['xxl'];
	const [isHiddenHeader, setIsHiddenHeader] = useState<contextType>(false);

	return (
		<>
			{laptopScreen ? (
				<div className="root-layout">
					{/* <Sider
						style={{
							backgroundColor: '#C6C6C6'
						}}
					>
					</Sider> */}
					<div className="root-layout__sider">{<SiderComp />}</div>

					<div className="root-layout__header-and-content">
						{/* <div className="root-layout__header">
							<HeaderComp />
						</div> */}

						<div className="root-layout__content">
							<Outlet />
						</div>
					</div>
					{/* <SongDisplay></SongDisplay> */}
				</div>
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
