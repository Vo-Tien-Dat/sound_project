import { Controller, Get } from '@nestjs/common';

@Controller('collection')
export class LibraryController {
    @Get('playlists')
    getPlaylist() {
        return 'playlist';
    }

    @Get('albums')
    getAlbum() {
        return 'album';
    }

    @Get('podcasts')
    getPodcasts() {
        return 'podcasts';
    }

    @Get('artists')
    getArtists() {
        return 'artists';
    }
}
