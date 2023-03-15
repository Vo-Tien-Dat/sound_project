import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'song' })
export class Song {
    @PrimaryGeneratedColumn({ name: 'song_uuid' })
    songId: string;

    @Column({ name: 'song_name' })
    songName: string;

    @Column({ name: 'song_src_image' })
    songSrcImage: string;

    @Column({ name: 'song_author' })
    songAuthor: string;

    @Column({ name: 'sound_time' })
    songTime: number;
}
