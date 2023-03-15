import axios from 'axios';
import { GET_URL_READ_SONG } from '../constant/constant';
import { Song } from '../models/song';

export const dataSongForUser: Required<Pick<Song, 'songName' | 'songSrcImage' | 'listener' | 'songTime'>>[] = [
	{
		songName: 'votiendat',
		songSrcImage: 'kldsfjkasjdf',
		listener: 120000,
		songTime: '12:04'
	},
	{
		songName: 'votiendat',
		songSrcImage: 'kldsfjkasjdf',
		listener: 120000,
		songTime: '12:04'
	},
	{
		songName: 'votiendat',
		songSrcImage: 'kldsfjkasjdf',
		listener: 120000,
		songTime: '12:04'
	},
	{
		songName: 'votiendat',
		songSrcImage: 'kldsfjkasjdf',
		listener: 120000,
		songTime: '12:04'
	},
	{
		songName: 'votiendat',
		songSrcImage: 'kldsfjkasjdf',
		listener: 120000,
		songTime: '12:04'
	}
];

export const songApiForUser = async (userName: string) => {
	return await axios.get(GET_URL_READ_SONG, {});
};
