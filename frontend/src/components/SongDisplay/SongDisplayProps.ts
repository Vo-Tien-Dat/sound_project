export interface SongDisplayProps {
	songDisplayId?: string;
	songDisplayName?: string;
	songDisplayAuthor?: string;
	songDisplayTime?: string;
	songDisplaySrcImage?: string;
	songDurationTime?: string | number;
	songCurrentTime?: string | number;
	isLiked?: boolean;
	isPause?: boolean;
	isNextSong?: boolean;
	isPreviousSong?: boolean;
	songDisplayProgress?: string;
}
