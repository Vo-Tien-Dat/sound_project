import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { albumProviders } from 'src/models/providers/album.providers';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AlbumController],
    providers: [...albumProviders, AlbumService],
    exports: [...albumProviders, AlbumService],
})
export class AlbumModule {}
