import { FC } from 'react';
import { Space } from 'antd';
import { Selector } from 'react-redux';
import { SongProps } from '../../../../components/Song/SongsProps';
import { Song } from '../../../../components/Song';
import './index.scss';
export const Songs: FC = () => {
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
		<Space direction="vertical" className="SongsSpace">
			{fakedata.map((value, index) => {
				const { songName, songSrcImage, songTime } = value;
				console.log(songName, songSrcImage, songTime);
				return (
					<Song songName={songName} songPosition={index} songSrcImage={songSrcImage} songTime={songTime} />
				);
			})}
		</Space>
	);
};
