import { Controller, Get, Param } from '@nestjs/common';

@Controller('search')
export class SearchController {
    @Get(':search_id')
    async getSearch(@Param('search_id') searchId: string) {
        return await {};
    }
}
