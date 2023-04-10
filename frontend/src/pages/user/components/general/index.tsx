import React, { FC, Fragment, useEffect } from 'react';
import { Space } from 'antd';
import { Card } from '../../../../components/Card';
import './index.scss';
import Typography from 'antd/es/typography/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import Root from '../../../../layouts/root';
import { playlist } from '../../../../models/playlist';
import { Cards } from '../../../../components/Cards';
import { Songs as SongsComp } from '../../../../components/Songs';
import { Song as SongComp } from '../../../../components/Song';
import Math from '../../../../utils/constants/math';
import { SONG_VIEW_FOR_USER } from '../../../../utils/constants/constant';
export const General = () => {
	const songs = useSelector<RootState, any>(state => state.users.songs);
	const albums = useSelector<RootState, any>(state => state.users.albums);
	const playlists = useSelector<RootState, any>(state => state.playlist);

	const handleFollowedStatus = () => {};

	return (
		<div className="user-general-content">
			<div className="user-general-content__parent"></div>
			<Space className="user-general-content__songs" direction="vertical">
				<Typography className="user-general__label">SONG</Typography>
				<SongsComp>
					{songs
						.slice(0, Math.min(songs.length, SONG_VIEW_FOR_USER))
						.map((currentSong: any, index: number) => {
							const { id, name, listener, time } = currentSong;
							return (
								<SongComp
									songPosition={index}
									songId={id}
									songName={name}
									songTime={time}
									listener={listener}
								/>
							);
						})}
				</SongsComp>
			</Space>
			<Space className="user-general-content__albums" direction="vertical">
				<Typography className="user-general__label">ALBUM </Typography>
				<Cards>
					{albums.map((albumValue: any, index: number) => {
						const { id, name, author, srcImage } = albumValue;
						return <Card cardTitle={name} />;
					})}
				</Cards>
			</Space>
			<Space className="user-general-content__playlists" direction="vertical">
				<Typography className="user-general__label">PLAYLIST </Typography>
				<Cards>
					{playlists.map((playlistValue: playlist, index: number) => {
						const { playlistId, playlistName, playlistAuthor } = playlistValue;
						return <Card cardTitle={playlistName} />;
					})}
				</Cards>
			</Space>
		</div>
	);
};
