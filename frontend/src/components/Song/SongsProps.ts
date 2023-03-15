export interface SongProps {
	songPosition?: number;

	songName?: string | undefined | null;

	listener?: number;

	isHeart?: boolean;

	songTime?: string;

	songSrcImage?: string;

	getHeartStatus?: () => any;
}
