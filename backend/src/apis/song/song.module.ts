import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { songProviders } from 'src/models/providers/song.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [SongController],
    providers: [...songProviders, SongController],
    exports: [...songProviders, SongController],
})
export class SongModule {}
