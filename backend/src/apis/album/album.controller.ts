import { Controller, Get, Post } from '@nestjs/common';

@Controller('album')
export class AlbumController {
    @Get('create')
    async createAlbum() {}

    @Get('update')
    async updateAlbum() {}
}
