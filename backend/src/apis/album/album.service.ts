import { Inject, Injectable } from '@nestjs/common';
import { Album } from 'src/models/entities/album.entity';
import { Song } from 'src/models/entities/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumService {
    constructor(
        @Inject('ALBUM_REPOSITORY')
        private albumRepository: Repository<Album>,
    ) {}

    async readMultipleSongByAlbumId(albumId: string): Promise<Song[]> {
        return;
    }

    async readAllAlbumByIdUser(idUser: string): Promise<Album[]> {
        const fakeApi: Album[] = [
            {
                albumId: '1',
                albumName: 'adele',
                albumAuthor: 'adele',
                albumDescription: 'test',
                albumSoundNumber: 1000,
                albumSrcImage: '',
            },
            {
                albumId: '1',
                albumName: 'adele',
                albumAuthor: 'adele',
                albumDescription: 'test',
                albumSoundNumber: 1000,
                albumSrcImage: '',
            },
            {
                albumId: '1',
                albumName: 'adele',
                albumAuthor: 'adele',
                albumDescription: 'test',
                albumSoundNumber: 1000,
                albumSrcImage: '',
            },
        ];

        const res = new Promise<Album[]>((resolve) => {
            const timeOut: number = 1000;
            setTimeout(() => {
                resolve(fakeApi);
            }, timeOut);
        });
        return res;
    }
}
