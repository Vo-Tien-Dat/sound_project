import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatedUserDTO} from './dto/users.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post('create')
    async createUser(@Body() createdUserDTO: CreatedUserDTO) {
        await this.userService.createSingleUserByObject(createdUserDTO);
        return {
            message: 'created user is successful',
        };
    }

    @Get('read')
    async readUser() {}
}
