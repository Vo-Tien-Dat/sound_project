import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import type { User as UserInterface } from '../interface/user.interface';
@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn({ name: 'user_uuid' })
    userId: string;

    @Column({ name: 'user_name' })
    userName: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'email' })
    email: string;

    @Column({ name: 'phone' })
    phone: string;

    constructor(user: UserInterface) {
        this.userName = (user && (user.userName || null)) || null;
        this.password = (user && (user.password || null)) || null;
        this.email = (user && (user.email || null)) || null;
        this.phone = (user && (user.phone || null)) || null;
    }
}
