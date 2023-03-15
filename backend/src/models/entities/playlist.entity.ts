import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'playlist'})
export class Playlist{
    @PrimaryGeneratedColumn({name: 'playlist_uuid'})
    playlistId: string; 

    @Column({name: 'playlist_name'})
    playlistName: string; 

    @Column({name: "playlist_src_image"})
    playlistSrcImage: string; 

    @Column({name: 'playlist_author'})
    playlistAuthor: string; 

    @Column({name: 'playlist_description'})
    playlistDescription: string; 
}