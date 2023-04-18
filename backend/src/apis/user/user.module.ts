import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/models/providers/user.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { mockUserService } from 'src/mock/providers/mockUserService';
import { AlbumModule } from '../album/album.module';
@Module({
    imports: [DatabaseModule, AlbumModule],
    controllers: [UserController],
    providers: [...userProviders, UserService],
    exports: [...userProviders, UserService],
})
export class UserModule {}
