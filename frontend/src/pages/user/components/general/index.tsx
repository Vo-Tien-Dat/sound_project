import React, { FC, Fragment, useState, useEffect } from 'react';
import { Space, Grid } from 'antd';
import './index.scss';
import Card from '../../../../components/Card';
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

import {
	CARD_VIEW_NUMBER_XS,
	CARD_VIEW_NUMBER_SM,
	CARD_VIEW_NUMBER_MD,
	CARD_VIEW_NUMBER_LG,
	CARD_VIEW_NUMBER_XXL,
	CARD_VIEW_NUMBER_XL
} from '../../../../utils/constants/constant';

const { useBreakpoint } = Grid;

export const General = () => {
	const songs = useSelector<RootState, any>(state => state.users.songs);
	const albums = useSelector<RootState, any>(state => state.users.albums);
	const playlists = useSelector<RootState, any>(state => state.playlist);

	const handleFollowedStatus = () => {};

	const [cardsNumber, setCardsNumber] = useState<number>(CARD_VIEW_NUMBER_XS);

	const screen = useBreakpoint();

	useEffect(() => {
		switch (true) {
			case screen['xs']:
				setCardsNumber(CARD_VIEW_NUMBER_XS);
				break;
			case screen['xxl']:
				setCardsNumber(CARD_VIEW_NUMBER_XXL);
				break;
			case screen['xl']:
				setCardsNumber(CARD_VIEW_NUMBER_XL);
				break;
			case screen['lg']:
				setCardsNumber(CARD_VIEW_NUMBER_LG);
				break;

			case screen['md']:
				setCardsNumber(CARD_VIEW_NUMBER_MD);
				break;

			case screen['sm']:
				setCardsNumber(CARD_VIEW_NUMBER_SM);
				break;
			default:
		}
	}, [screen]);

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
					{albums.slice(0, Math.min(albums.length, cardsNumber)).map((albumValue: any, index: number) => {
						const { id, name, author, srcImage } = albumValue;
						return <Card cardTitle={name} />;
					})}
				</Cards>
			</Space>
			<Space className="user-general-content__playlists" direction="vertical">
				<Typography className="user-general__label">PLAYLIST </Typography>
				<Cards>
					{playlists
						.slice(0, Math.min(playlists.length, cardsNumber))
						.map((playlistValue: playlist, index: number) => {
							const { playlistId, playlistName, playlistAuthor } = playlistValue;
							return <Card cardTitle={playlistName} />;
						})}
				</Cards>
			</Space>
		</div>
	);
};
