import { Module } from '@nestjs/common';
import { AlbumModule } from '../album/album.module';
import { PlaylistModule } from '../playlist/playlist.module';
import { SongModule } from '../song/song.module';
import { UserModule } from '../user/user.module';
import { SearchController } from './search.controller';

@Module({
    imports: [UserModule, SongModule, AlbumModule, PlaylistModule],
    controllers: [SearchController],
    providers: [SearchController],
})
export class SearchModule {}
