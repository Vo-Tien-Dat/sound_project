import { Space, Typography } from 'antd';
import React, { FC, useState } from 'react';
import Avatar from 'antd/es/avatar/avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { SongProps } from './SongsProps';
import { UserOutlined } from '@ant-design/icons';
import './index.scss';
export const Song: FC<SongProps> = props => {
	const { songName, songSrcImage, listener, isHeart, songTime, songPosition, getHeartStatus } = props;
	const [isFavorite, setFavorite] = useState<boolean>(isHeart || false);

	const handleFavorite = () => {
		setFavorite(!isFavorite);
	};

	return (
		<Space direction="horizontal" className="SongSpace">
			<Space className="SongItemWrapContent">
				<Typography>{songPosition}</Typography>
				<Avatar shape={'square'} size={48} icon={<UserOutlined />}></Avatar>
				<Typography>{songName || 'songName'}</Typography>
			</Space>
			<Space className="SongItemFullFill">
				<Typography> {listener || 1000}</Typography>
			</Space>
			<Space className="SongItemWrapContent">
				<FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} onClick={handleFavorite} />
				<Typography>{songTime || 10000}</Typography>
			</Space>
		</Space>
	);
};
