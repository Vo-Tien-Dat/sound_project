import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/models/providers/user.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [...userProviders, UserService],
    exports: [...userProviders, UserService],
})
export class UserModule {}
