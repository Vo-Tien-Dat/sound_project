import {
    IsString,
    IsNotEmpty,
    Matches,
    IsEmail,
    IsDate,
} from 'class-validator';
import { USER_NAME_EMPTY, PASSWORD_EMPTY } from 'src/common/constants/constant';
import { isUserName } from 'src/common/constants/regexUser';

export class UserDTO {
    @IsNotEmpty({ message: USER_NAME_EMPTY })
    @IsString()
    @Matches(isUserName)
    userName: string;

    @IsString()
    @IsNotEmpty({ message: PASSWORD_EMPTY })
    password: string;
}

export class CreatedUserDTO {
    @IsString()
    @IsNotEmpty({ message: USER_NAME_EMPTY })
    userName: string;

    @IsString()
    @IsNotEmpty({ message: PASSWORD_EMPTY })
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    phone: string | null;
}
