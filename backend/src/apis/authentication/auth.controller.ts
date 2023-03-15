import {
    Body,
    Controller,
    Post,
} from '@nestjs/common';
import { UserDTO } from '../user/dto/users.dto';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('sign-up')
    async postSignUp(@Body() userDTO: UserDTO): Promise<any> {
        const { userName, password } = userDTO;
        const user = await this.authService.validateUser(userName, password);
        const responseSuccess = await this.authService.generateJWT(user);
        return {
            data: {
                responseSuccess,
                expires_in: '36000',
            },
        };
    }
}
