import react, { FC, useState, useEffect } from 'react';
import { Space, Avatar, Typography, Button } from 'antd';
import { TabAndContent } from '../../components/TabAndContent';
import './index.scss';
import { Songs } from './components/songs';
import { General } from './components/general';
import { useSelector, useDispatch } from 'react-redux';
import { loadingData } from '../../app/reducers/usersSlice';
import { RootState } from '../../app/store';
import { Albums } from './components/albums';
import { Playlist } from './components/playlist';

export const User: FC = () => {
	const handleFollowedUser = () => {};
	const dispatch = useDispatch();
	const srcImage = useSelector<RootState, any>(state => state.users.srcImage);
	const name = useSelector<RootState, any>(state => state.users.name);
	const initalLoadingData = () => {
		dispatch(loadingData({ loading: true }));
	};

	useEffect(() => {
		initalLoadingData();
	}, []);

	return (
		<div className="user-information-space">
			<Space className="user-information-space__user-information">
				<Space className="user-information__user-avatar-space">
					<Avatar size={128} src={srcImage || ''} />
				</Space>
				<Space direction="vertical">
					<Typography>Artist</Typography>
					<Typography className="user-information__user-name">{name || 'Vo Tien Dat'}</Typography>
					<Button className="user-information__btn-followed" onClick={handleFollowedUser}>
						<Typography>FOLLOW</Typography>
					</Button>
				</Space>
			</Space>
			<TabAndContent tabPosition={0} tabItems={['General', 'Song', 'Album', 'Playlist']}>
				<General />
				<Songs />
				<Albums />
				<Playlist />
			</TabAndContent>
		</div>
	);
};
