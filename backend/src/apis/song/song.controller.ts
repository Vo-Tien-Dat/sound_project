import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('sound')
export class SongController {
    @Get()
    async createSong() {}

    @Get()
    async readSong() {}


    @Post('update')
    async updateSong() {}

    @Get()
    async deleteSong() {}
}
