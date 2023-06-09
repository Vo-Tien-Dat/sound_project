import { Skeleton, Space, Typography } from 'antd';
import React, { FC, useState, useRef, Fragment } from 'react';
import Avatar from 'antd/es/avatar/avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { SongProps } from './SongProps';
import { UserOutlined } from '@ant-design/icons';
import SkeletonAvatar from 'antd/es/skeleton/Avatar';
import SkeletonInput from 'antd/es/skeleton/Input';
export const Song: FC<SongProps> = props => {
	const {
		songId,
		songName,
		songSrcImage,
		listener,
		isHeart,
		songTime,
		songPosition,
		songAuthor,
		songAlbum,
		skeleton,
		skeletonActive,
		onClickHeart
	} = props;

	const refIconHeart = useRef<any>(null);
	const [isFavorite, setFavorite] = useState<boolean>(isHeart || false);

	const handleFavorite = () => {
		setFavorite(!isFavorite);
	};

	const handleClickSong = () => {};

	const handleClickManagement = (event: React.MouseEvent<HTMLElement>) => {
		const { target } = event;
		if (refIconHeart.current.contains(target)) {
			onClickHeart !== undefined && onClickHeart(songId || '1', isFavorite);
			return handleFavorite();
		}
		return handleClickSong();
	};

	return (
		<div className="song-space" onClick={handleClickManagement}>
			<Space className="song-space__main-song">
				<div className="main-song__position">
					<Typography className="song__position song__position--primary">{songPosition}</Typography>
					{/* {skeleton === true ? (
						<Skeleton.Input active={skeletonActive || false} />
					) : (
						<Typography className="song_position">{songPosition}</Typography>
					)} */}
				</div>
				<div className="main-song__image">
					{skeleton === true ? (
						<SkeletonAvatar
							active={skeletonActive || false}
							shape={'square'}
							size={48}
							style={{
								borderRadius: '8px'
							}}
						></SkeletonAvatar>
					) : (
						<Avatar shape={'square'} size={48} icon={<UserOutlined />}></Avatar>
					)}
				</div>
				<div className="main-song__parent-name">
					<div className="main-song__name">
						{skeleton === true ? (
							<SkeletonInput
								active={skeletonActive || false}
								style={{
									borderRadius: '8px'
								}}
							></SkeletonInput>
						) : (
							<Typography className="song__name song__name--primary">{songName || 'songName'}</Typography>
						)}
					</div>
					<div className="main-song__author">
						<Typography className="song__author song__author--primary">{songAuthor || ''}</Typography>
					</div>
				</div>
			</Space>
			<Space className="song-space__album-and-listener">
				{skeleton === true ? (
					<SkeletonInput active={skeletonActive || false}></SkeletonInput>
				) : (
					<Typography className="song__listener song__listener--primary"> {listener || 1000}</Typography>
				)}
			</Space>
			<div className="song-space__song-status">
				{skeleton === true ? (
					<SkeletonInput active={skeletonActive}></SkeletonInput>
				) : (
					<Fragment>
						<FontAwesomeIcon ref={refIconHeart} icon={isFavorite ? faHeartSolid : faHeartRegular} />
						<Typography className="song__time song__time--primary">{songTime || 10000}</Typography>
					</Fragment>
				)}
			</div>
		</div>
	);
};
