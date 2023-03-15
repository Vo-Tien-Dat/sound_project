import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { playlistProviders } from 'src/models/providers/playlist.providers';
import { DatabaseModule } from 'src/database/database.module';
@Module({
    imports: [DatabaseModule],
    controllers: [PlaylistController],
    providers: [...playlistProviders, PlaylistService],
    exports: [...playlistProviders, PlaylistService],
})
export class PlaylistModule {}
