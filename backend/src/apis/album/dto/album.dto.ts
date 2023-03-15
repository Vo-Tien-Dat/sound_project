import { IsNumber, IsString } from 'class-validator';

interface Album {
    albumId: string;
    albumName: string;
    albumSrcImage: string;
    albumAuthor: string;
    albumNumberSound: number;
    albumDescription: string;
}

export class AlbumDTO {
    @IsString()
    albumId: string;

    @IsString()
    albumName: string;

    @IsString()
    albumSrcImage: string;

    @IsString()
    albumAuthor: string;

    @IsNumber()
    albumNumberSong: number;

    @IsString()
    albumDescription: string;
}
