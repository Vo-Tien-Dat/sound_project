import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'favorite' })
export class Favorite {
    @PrimaryGeneratedColumn({ name: 'favorite_uuid' })
    favoriteId: string;

    @Column({ name: 'favorite_name' })
    favoriteName: string;

    @Column({ name: 'favorite_object' })
    favoriteObject: string;

    @Column({ name: 'object_id' })
    objectId: string;
}
