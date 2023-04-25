import React, { CSSProperties } from 'react';
import './index.scss';
import { UserOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Space, Grid } from 'antd';
import { Search } from '../../components/Search';
import { Avatar } from '../../components/Avatar';
import { ReactNode } from 'react';
import { Menu } from '../../interface/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
const { useBreakpoint } = Grid;

const style: CSSProperties = {
	backgroundColor: 'white'
};

type MenuItem = Required<Menu>;

const styleAvatarMenuItem: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignContent: 'center'
};

const getItem = (key: ReactNode, icon: ReactNode, label: ReactNode, onRedirect: (event: any) => void): ReactNode => {
	return (
		<div style={styleAvatarMenuItem} onClick={onRedirect}>
			<div>{icon}</div>
			<div
				style={{
					marginLeft: 8
				}}
			>
				{label}
			</div>
		</div>
	);
};

const handleRedirect = (event: any) => {
	console.log('oke');
};

const items: ReactNode[] = [
	getItem('1', <FontAwesomeIcon icon={faUser} />, 'Profile', handleRedirect),
	getItem('2', <FontAwesomeIcon icon={faGear} />, 'Settings & privacy', handleRedirect),
	getItem('3', <FontAwesomeIcon icon={faRightFromBracket} />, 'Log Out', handleRedirect)
];

const Header: React.FC = () => {
	const screens = useBreakpoint();
	const laptopScreen = screens['lg'] || screens['xl'] || screens['xxl'];
	1;
	return (
		<>
			{laptopScreen ? (
				<div id="header" className="ms-header-space">
					<div className="ms-header-space__search">
						<Search />
					</div>
					<div className="ms-header-space__avatar">
						<Avatar data={items} />
					</div>
				</div>
			) : (
				<Space></Space>
			)}
		</>
	);
};
export { Header };
