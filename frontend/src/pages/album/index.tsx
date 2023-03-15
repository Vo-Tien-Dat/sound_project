import react, { FC, useEffect, useState } from 'react';
import { Space, Avatar, Typography, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './index.scss';
import { addAlbumFavorite, readAlbum } from '../../app/reducers/albumSlice';
import { Song as SongInterface } from '../../models/song';
import { Song } from '../../components/Song';
import { AvatarAndUserName } from '../../components/AvatarAndUserName';
export const Album: FC = () => {
	console.log('render');
	const album = useSelector<RootState, any>(state => {
		console.log(state.album);
		return state.album;
	});
	const songs = useSelector<RootState, any>(state => state.song);
	const dispatch = useDispatch();
	const handleAlbumFavorite = () => {
		setLiked(!isLiked);
		dispatch(
			addAlbumFavorite({
				albumId: 'hello world'
			})
		);
	};

	const getData = () => {
		dispatch(
			readAlbum({
				albumId: 'hello world'
			})
		);
	};

	useEffect(() => {
		getData();
	}, [songs]);

	const [isLiked, setLiked] = useState(false);
	const albumName = 'hello world';
	const albumNumberSong = 12;
	const albumAuthor = 'Adele';
	return (
		<Space direction="vertical" className="AlbumPageSpace">
			<Space className="AlbumInformationSpace">
				<Space>
					<Avatar size={144} shape="square" icon={<UserOutlined />} />
				</Space>
				<Space direction="vertical">
					<Typography
						style={{
							fontSize: '12px'
						}}
					>
						Album
					</Typography>
					<Typography
						style={{
							fontSize: '32px'
						}}
					>
						{albumName}
					</Typography>
					<Space direction="horizontal">
						<AvatarAndUserName url={'/user/test'} name={'Adele'} />
						<Typography>{albumAuthor}</Typography>
						<Typography>{albumNumberSong}</Typography>
					</Space>
				</Space>
			</Space>
			<Space direction="vertical" className="ListedSongInAlbum">
				<Space direction="horizontal" align="center">
					<Button shape="circle" icon={<FontAwesomeIcon icon={faPlay} />}></Button>
					<FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} onClick={handleAlbumFavorite} />
				</Space>
				<Space
					direction="vertical"
					style={{
						width: '100%',
						padding: '16px'
					}}
				>
					{songs.map((songValue: SongInterface, index: number) => {
						const { songName, songTime } = songValue;
						return <Song songPosition={index} songName={songName} songTime={songTime} />;
					})}
				</Space>
			</Space>
		</Space>
	);
};
