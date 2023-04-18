export interface SongProps {
	songPosition?: number;

	songId?: string;

	songName?: string | undefined | null;

	listener?: number | string;

	isHeart?: boolean;

	songTime?: string;

	songSrcImage?: string;

	songAuthor?: string;

	songAlbum?: string;

	skeleton?: boolean;

	skeletonActive?: boolean;

	onClickHeart?: (songId: string, isHeart: boolean) => boolean;
}
