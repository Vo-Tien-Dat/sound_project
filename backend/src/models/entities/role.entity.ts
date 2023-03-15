import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'role' })
export class Role {
    @PrimaryGeneratedColumn({ name: 'role_uuid' })
    roleId: string;

    @Column({ name: 'user_id' })
    userId: string;
}
