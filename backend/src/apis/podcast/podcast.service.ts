import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PodCast } from 'src/models/entities/podcast.entity';
@Injectable()
export class PodcastService {
    constructor(
        @Inject('PODCAST_REPOSITIORY')
        private podcastReopository: Repository<PodCast>,
    ) {}

    async readPodCastByPodcastId(podcastId: string) {
        return await this.podcastReopository.findOneBy({ podcastId });
    }
}
