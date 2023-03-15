import { IsString } from 'class-validator';

interface Playlist {
    playlistId?: string;
    playlistName?: string;
    playlistSrcImage?: string;
    playlistAuthor?: string;
    playlistDescription?: string;
}

export class PlaylistDTO {
    @IsString()
    playlistId: string;

    @IsString()
    playlistName: string;

    @IsString()
    playlistSrcImage: string;

    @IsString()
    playlistAuthor: string;

    @IsString()
    playlistDescription: string;
}
