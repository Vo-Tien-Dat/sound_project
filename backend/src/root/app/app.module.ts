import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/apis/authentication/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistModule } from 'src/apis/playlist/playlist.module';
import { UserModule } from 'src/apis/user/user.module';
import { SearchModule } from 'src/apis/search/search.module';
import { HomeModule } from 'src/apis/home/home.module';
import { LibraryModule } from 'src/apis/library/library.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'music',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        AuthModule,
        PlaylistModule,
        UserModule,
        SearchModule,
        LibraryModule,
        HomeModule,
    ],
    providers: [AppService],
})
export class AppModule {}
