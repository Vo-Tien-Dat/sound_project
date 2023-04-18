import react, { FC, useState, useEffect } from 'react';
import { Space, Avatar, Typography, Button, Skeleton } from 'antd';
import { TabAndContent } from '../../components/TabAndContent';
import './index.scss';
import { Songs } from './components/songs';
import { General } from './components/general';
import { useSelector, useDispatch } from 'react-redux';
import { loadingData } from '../../app/reducers/usersSlice';
import { RootState } from '../../app/store';
import { Albums } from './components/albums';
import { Playlist } from './components/playlist';
import { DEFAULT_DATA_TYPE_STRING_EMPTY } from '../../constant/constant';
export const User: FC = () => {
	const [isFollowed, setIsFollowed] = useState<boolean>(false);
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
					{srcImage !== DEFAULT_DATA_TYPE_STRING_EMPTY ? (
						<Avatar size={128} src={srcImage || ''} />
					) : (
						<Skeleton.Avatar
							active
							style={{
								height: '128px',
								width: '128px'
							}}
						/>
					)}
				</Space>
				<Space direction="vertical">
					<Typography className="user-information__user-name">
						{name !== DEFAULT_DATA_TYPE_STRING_EMPTY ? name : <Skeleton.Input active />}
					</Typography>
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
