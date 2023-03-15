import { Controller, Get, Param } from '@nestjs/common';

@Controller('podcast')
export class PodCastController {
    @Get(':podcast_id')
    async readPodCast(@Param('podcast_id') podcastId: string) {
        return await {};
    }
}
