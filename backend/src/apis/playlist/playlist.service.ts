import { Get, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Playlist } from 'src/models/entities/playlist.entity';
@Injectable()
export class PlaylistService {
    constructor(
        @Inject('PLAYLIST_REPOSITORY')
        private playlistRepository: Repository<Playlist>,
    ) {}
    /*  */
    async createPlaylist() {}

    /* read playlist  */
    async readPlayistById(idPlaylist: string) {}

    /* read playlist */
    async updatePlaylist() {}

    /* delete playlist */
    async deletePlaylistId() {}
}
