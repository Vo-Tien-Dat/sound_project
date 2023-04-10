import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/models/entities/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user: User = await this.userService.readSingleUserByUserName(
            username,
        );

        // throw error if not found user
        if (!user) {
            throw new NotFoundException("Username isn't existed");
        }

        // throw error if password is failed
        if (user.password !== pass) {
            throw new UnauthorizedException('Invalid username or password');
        }

        return user;
    }

    async generateJWT(user: User) {
        const { userName, userId } = user;
        const payload = { username: userName, id: userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async generateRefeshJWT() {
        const refreshJWT = '';
        return refreshJWT;
    }
}
