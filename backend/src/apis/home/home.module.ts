import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { mockApi } from './mockApi';

@Module({
    controllers: [HomeController],
    providers: [
        {
            provide: HomeService,
            useClass: mockApi,
        },
    ],
})
export class HomeModule {}
