import { Song } from './song';
export interface Album {
	albumId?: string;
	albumName?: string;
	albumAuthor?: string;
	albumSrcImage?: string;
	albumNumberSong?: number;
	isLiked?: boolean;
}

export interface AlbumSong extends Album, Song {
	albumId: string;
	albumName: string;
	albumAuthor: string;
	isLiked: boolean;
	songs: Song[];
}
