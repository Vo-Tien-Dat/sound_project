import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'content' })
export class Content {
    @PrimaryGeneratedColumn({ name: 'content_uuid' })
    contentId: string;

    @Column({ name: 'content_name' })
    contentName: string;

    @Column({ name: 'content_show' })
    contentShow: boolean;

    @Column({ name: 'content_object' })
    contentObject: string;
}
