import { SongDisplayProps } from './SongDisplayProps';

type SongDisplayType = Required<SongDisplayProps>;

export const SongDisplayRequired: SongDisplayType = {
	songDisplayId: '1',
	songDisplayName: 'default song',
	songDisplayAuthor: 'default author',
	songDisplaySrcImage: 'default image',
	songDisplayProgress: '00:00',
	songDisplayTime: '00:00',
	songCurrentTime: '00:00',
	songDurationTime: '00:00',
	isLiked: false,
	isNextSong: false,
	isPause: false,
	isPreviousSong: false
};
