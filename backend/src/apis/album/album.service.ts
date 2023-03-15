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
}
