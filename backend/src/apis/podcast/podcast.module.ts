import { Module } from '@nestjs/common';
import { PodCastController } from './podcast.controller';
import { podcastProviders } from 'src/models/providers/podcast.providers';
import { PodcastService } from './podcast.service';

Module({
    controllers: [PodCastController],
    providers: [...podcastProviders, PodcastService],
    exports: [...podcastProviders, PodcastService],
});

export class PodcastModule {}
