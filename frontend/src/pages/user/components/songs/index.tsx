import { FC } from 'react';
import { Space } from 'antd';
import { Selector } from 'react-redux';
import { SongProps } from '../../../../components/Song/SongsProps';
import { Song } from '../../../../components/Song';
import { Songs as SongsComp } from '../../../../components/Songs';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
export const Songs: FC = () => {
	const songs = useSelector<RootState, any>(state => state.users.songs);
	const fakedata: SongProps[] = [
		{
			songPosition: 1,
			songName: 'Easy on me',
			songSrcImage: 'adsfajfljkadsfl',
			songTime: '12:04'
		},
		{
			songPosition: 1,
			songName: 'Easy on me',
			songSrcImage: 'adsfajfljkadsfl',
			songTime: '12:04'
		}
	];
	return (
		<Space direction="vertical" className="content-space__song">
			<SongsComp>
				{songs.map((value: any, index: number) => {
					const { songName, songSrcImage, songTime } = value;
					return (
						<Song
							songName={songName}
							songPosition={index}
							songSrcImage={songSrcImage}
							songTime={songTime}
						/>
					);
				})}
			</SongsComp>
		</Space>
	);
};
