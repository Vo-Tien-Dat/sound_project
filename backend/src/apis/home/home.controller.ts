import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';
@Controller('home')
export class HomeController {
    constructor(private homeService: HomeService) {}
    @Get()
    async root() {
        return this.homeService.create();
    }
}
