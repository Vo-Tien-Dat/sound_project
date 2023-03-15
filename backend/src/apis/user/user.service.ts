import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../models/entities/user.entity';
import { CreatedUserDTO } from './dto/users.dto';
import { HttpStatus } from '@nestjs/common';
@Injectable()
export class UserService {
    public constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}

    async createSingleUserByObject(createUserDTO: CreatedUserDTO) {
        try {
            const user = new User({
                userName: createUserDTO.userName,
                password: createUserDTO.password,
                name: createUserDTO.name,
                email: createUserDTO.email,
                phone: createUserDTO.phone,
            });
            await this.userRepository.save(user);
        } catch (error) {
            const { code, sqlMessage } = error;
            if (code === 'ER_BAD_NULL_ERROR') {
                throw new HttpException(
                    {
                        message: sqlMessage,
                    },
                    HttpStatus.FORBIDDEN,
                );
            }
            throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
        }
    }

    async readSingleUserByUserId(userId: string): Promise<User> {
        const user: User = await this.userRepository.findOne({
            select: ['userId', 'userName'],
            where: { userId },
        });

        return user;
    }

    async readSingleUserByUserName(userName: string): Promise<User> {
        const user: User = await this.userRepository.findOneBy({ userName });
        return user;
    }
}
