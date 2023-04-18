import { UserService } from 'src/apis/user/user.service';
import { HomeService } from '../HomeService';
import { UserService as mockUser } from '../UserSerivce';
export const mockUserService = {
    provide: UserService,
    useClass: HomeService,
};
