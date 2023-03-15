import { Inject, Injectable, Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Song } from 'src/models/entities/song.entity';

@Injectable()
export class SongService {
    constructor(
        @Inject('SONG_REPOSITORY')
        private songRepository: Repository<Song>,
    ) {}

    async readSingleSongBySongId(songId: string): Promise<Song> {
        return await this.songRepository.findOneBy({ songId });
    }
}
