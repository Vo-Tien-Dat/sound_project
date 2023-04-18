import React, { FC } from 'react';
import { Space } from 'antd';
import { Cards } from '../../../../components/Cards';
import Card from '../../../../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../app/store';
import './index.scss';
export const Playlist: FC = () => {
	const playlists = useSelector<RootState, any>(state => state.users.albums);
	return (
		<div className="user-playlists-content">
			<Space className="user-playlists-content__albums" direction="vertical">
				<div className="user-playlists__label">PLAYLIST</div>
				<Cards>
					{playlists.map((albumValue: any, index: number) => {
						const { id, name, author, srcImage } = albumValue;
						return <Card cardTitle={name} />;
					})}
				</Cards>
			</Space>
		</div>
	);
};
