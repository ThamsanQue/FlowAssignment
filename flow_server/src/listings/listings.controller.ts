import { Controller, Get, Param, Post } from '@nestjs/common';
import { ListingsService } from './listings.service';

@Controller('listings')
export class ListingsController {
    constructor(private listingsService: ListingsService) { }

    @Post()
    async createListings() {
        return await this.listingsService.createListings()
    }

    @Get('/agent/:id')
    async getListingsByAgentId(@Param('id') agentId: string) {
        return await this.listingsService.getListingsByAgentId(agentId)
    }

    @Get('/:id')
    async getListingsById(@Param('id') id: string) {
        return await this.listingsService.getListingsById(id)
    }
}

