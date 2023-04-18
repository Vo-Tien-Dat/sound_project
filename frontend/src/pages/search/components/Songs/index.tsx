import React, { FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { Song as SongComponent } from '../../../../components/Song';
import { Songs as SongsComp } from '../../../../components/Songs';
import { toAddFavoriteSong } from '../../../../app/reducers/searchSlice';
const Songs: FC = () => {
	const songs = useSelector<RootState, any>(state => state.search.songs);
	const dispatch = useDispatch();
	const handleClickHeart = (songId: string, isHeart: boolean) => {
		dispatch(
			toAddFavoriteSong({
				song_id: songId,
				heart_status: isHeart
			})
		);
		return false;
	};
	return (
		<Fragment>
			<SongsComp>
				{songs.map((currentValue: any, index: number) => {
					const { songId, songName, songAuthor, songTime, isHeart } = currentValue;

					return (
						<div className="song-space-item" key={index}>
							<SongComponent
								songPosition={index}
								songId={songId}
								songName={songName}
								songTime={songTime}
								onClickHeart={handleClickHeart}
								isHeart={isHeart}
							/>
						</div>
					);
				})}
			</SongsComp>
		</Fragment>
	);
};

export default Songs;
