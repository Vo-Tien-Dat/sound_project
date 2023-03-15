import React, { FC } from 'react';
import { Space } from 'antd';
import { Card } from '../../../../components/Card';
import './index.scss';
import Typography from 'antd/es/typography/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import Root from '../../../../layouts/root';
import { Album } from '../../../../models/album';
import { playlist } from '../../../../models/playlist';
export const General = () => {
	const songs = useSelector<RootState, any>(state => state.song);
	const albums = useSelector<RootState, any>(state => state.album);
	const playlists = useSelector<RootState, any>(state => state.playlist);
	const dispatch = useDispatch();
	return (
		<Space direction="vertical" className="GeneralSpace">
			<Space direction="vertical">
				<Typography>SONG</Typography>
			</Space>
			<Space direction="vertical">
				<Typography>ALBUM </Typography>
				<Space direction="horizontal">
					{albums.map((albumValue: Album, index: number) => {
						const { albumId, albumName, albumAuthor } = albumValue;
						return <Card cardTitle={albumName} />;
					})}
				</Space>
			</Space>
			<Space direction = "vertical">
				<Typography>PLAYLIST </Typography>
				<Space direction="horizontal">
					{
						playlists.map((playlistValue: playlist, index: number) =>{
							const {playlistId, playlistName, playlistAuthor} = playlistValue; 
							return <Card cardTitle={playlistName}/>
						})
					}
				</Space>
			</Space>
			<Space>
				<Typography>PODCAST</Typography>
			</Space>
		</Space>
	);
};
