import React, { FC, useState } from 'react';
import { Space, Typography } from 'antd';
import { SongDisplayProps } from './SongDisplayProps';
import Avatar from 'antd/es/avatar/avatar';
import { SongDisplayRequired } from './SongDisplayRequiredProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faVolumeOff, faVolumeMute, faVolumeHigh, faVolumeDown, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { VOLUME_HIGH, VOLUME_OFF, VOLUME_XMARK, VOLUME_LOW } from '../../constant/constant';
import { Volume } from '../Volume';
export const SongDisplay: FC<SongDisplayProps> = props => {
	const { songDisplayName, songDisplayAuthor, isLiked, songCurrentTime, songDurationTime } = {
		...SongDisplayRequired,
		...props
	};
	const [isFavorite, setFavorite] = useState<boolean>(isLiked);
	const [isPause, setPause] = useState<boolean>(true);
	const handleAddFavoriteSongFromDisplaySong = () => {
		setFavorite(isFavorite);
	};

	const [statusVolume, setStatusVolume] = useState<string>('HIGH');

	const handleSongMute = () => {
		setStatusVolume(VOLUME_XMARK);
	};

	const loadSong = () => {};

	const updateProgress = () => {};

	const setProgress = () => {};

	const handlePauseSong = () => {};

	const handleAddFavorite = () => {
		setFavorite(!isFavorite);
	};

	const formatTime = (time: number) => {
		let hours: string | number = Math.floor(time / 3600);
		let minutes: string | number = Math.floor((time - hours * 3600) / 60);
		let seconds: string | number = Math.floor(time - hours * 3600 - minutes * 60);
		hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		return (hours !== '0' ? +hours + ':' : '0') + minutes + ':' + seconds;
	};

	const handlePlaySongPlay = () => {
		setPause(!isPause);
	};
	return (
		<Space direction="horizontal" className="SongDisplaySpace">
			<Space direction="horizontal">
				<Space direction="vertical">
					<Avatar shape="square" size={56} />
				</Space>
				<Space size={2} direction="vertical">
					<Typography className="SongNameTypography">{songDisplayName}</Typography>
					<Typography className="SongAuthorTypography">{songDisplayAuthor}</Typography>
				</Space>
				<Space
					style={{
						marginLeft: '24px'
					}}
				>
					<FontAwesomeIcon
						style={{
							fontSize: '18px'
						}}
						icon={isFavorite ? faHeartSolid : faHeartRegular}
						onClick={handleAddFavorite}
					/>
				</Space>
			</Space>
			<Space direction="vertical" className="SongControl">
				<Space>
					<FontAwesomeIcon icon={faBackward} />
					<div className="SongPlay">
						<FontAwesomeIcon
							style={{ fontSize: '20px' }}
							icon={isPause ? faPause : faPlay}
							onClick={handlePlaySongPlay}
						/>
					</div>

					<FontAwesomeIcon icon={faForward} />
				</Space>
				<Space className="SongProgressControl">
					<Typography>{songCurrentTime}</Typography>
					<div className="SongProgress"></div>
					<Typography>{songDurationTime}</Typography>
				</Space>
			</Space>
			<Space>
				<Volume />
			</Space>
		</Space>
	);
};
