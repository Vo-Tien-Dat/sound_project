import { DataSource } from 'typeorm';
import { PodCast } from '../entities/podcast.entity';
export const podcastProviders = [
    {
        provide: 'PODCAST_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(PodCast),
        inject: ['DATA_SOURCE'],
    },
];
