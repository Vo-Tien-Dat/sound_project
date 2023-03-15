import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'podcast' })
export class PodCast {
    @PrimaryGeneratedColumn({ name: 'podcast_uuid' })
    podcastId: string;

    @Column({ name: 'podcast_name' })
    podcastName: string;

    @Column({ name: 'podcast_src_image' })
    podcastSrcImage: string;

    @Column({ name: 'podcast_author' })
    podcastAuthor: string;

    @Column({ name: 'podcast_time' })
    postcastTime: number;

    @Column({ name: 'podcast_description' })
    podcastDescription: string;
}
