import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'album' })
export class Album {
    @PrimaryGeneratedColumn({ name: 'album_uuid' })
    albumId: string;

    @Column({ name: 'album_name' })
    albumName: string;

    @Column({ name: 'album_src_image' })
    albumSrcImage: string;

    @Column({ name: 'album_author' })
    albumAuthor: string;

    @Column({name: "album_sound_number"})
    albumSoundNumber: number; 

    @Column({ name: 'album_description' })
    albumDescription: string;
}
