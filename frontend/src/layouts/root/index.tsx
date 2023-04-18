import React, { useState, FC, useEffect, Fragment } from 'react';
import { Layout, Grid } from 'antd';
import './index.scss';
import { Sider as SiderComp } from '../sider';
import { Header as HeaderComp } from '../header';
import { Home } from '../../pages/home';
import { Search } from '../../pages/search';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { SongDisplay } from '../../components/SongDisplay';
import { RootProps } from './RootProps';
import useConnection from '../../hooks/useConnection';
import NoResultData from '../../components/NoResultData';
const { Header, Footer, Sider, Content } = Layout;

const { useBreakpoint } = Grid;

const DefaultProps: RootProps = {
	isHiddenHeader: true
};

const Root: FC<RootProps> = props => {
	const screens = useBreakpoint();
	const laptopScreen = screens['lg'] || screens['xl'] || screens['xxl'];
	const [isAuth, setIsAuth] = useState<boolean>(false);

	const connection = useConnection();
	const navigate = useNavigate();

	const handleTokenChange = (event: StorageEvent) => {
		if (event['key'] === 'access_token' && event['newValue'] === null) {
			navigate('/login');
		}
	};

	const handleTokenChecked = () => {
		const accessToken = window.localStorage.getItem('access_token');
		if (accessToken === null) {
			navigate('/login');
		}
	};

	addEventListener('storage', handleTokenChange);

	return (
		<Fragment>
			{laptopScreen ? (
				<div className="root-layout">
					<div className="root-layout__sider">{<SiderComp />}</div>

					<div className="root-layout__header-and-content">
						<div className="root-layout__header">
							<HeaderComp />
						</div>

						<div className="root-layout__content">{connection ? <Outlet /> : <NoResultData />}</div>
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
		</Fragment>
	);
};

export default Root;
