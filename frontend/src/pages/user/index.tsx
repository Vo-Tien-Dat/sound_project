import react, { FC, useState } from 'react';
import { Space, Avatar, Typography, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { TabAndContent } from '../../components/TabAndContent';
import './index.scss';
import { Songs } from './components/songs';
import { General } from './components/general';
import { useSelector, useDispatch } from 'react-redux';
export const User: FC = () => {
	const [isFollowed, setFollowed] = useState(false);

	const handleFollowedUser = () => {
		console.log('followed the others'); 
	};

	return (
		<Space direction="vertical" className="UserInformationSpace">
			<Space
				style={{
					width: '100%'
				}}
			>
				<Space className="UserAvatarSpace">
					<Avatar size={128} icon={<UserOutlined />} />
				</Space>
				<Space direction="vertical">
					<Typography>Artist</Typography>
					<Typography>Vo Tien Dat</Typography>
					<Button onClick={handleFollowedUser}>
						<Typography>FOLLOW</Typography>
					</Button>
				</Space>
			</Space>
			<Space
				style={{
					width: '100%'
				}}
			>
				<TabAndContent tabPosition={0} tabItems={['General', 'Song', 'Playlist', 'Album', 'Podcast']}>
					<General />
					<Songs />
				</TabAndContent>
			</Space>
		</Space>
	);
};
