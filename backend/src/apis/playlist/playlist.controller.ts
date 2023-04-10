import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('playlist')
export class PlaylistController {
    @Post('create')
    createPlaylist(): string {
        return 'successful';
    }

    @Get(':playlist_id')
    readPlaylist(@Param('playlist_id') playlistId: string) {
        return 'successfull';
    }
}
