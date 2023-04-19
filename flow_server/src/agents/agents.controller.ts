import { Controller, Get, Param, Post } from '@nestjs/common';
import { AgentsService } from './agents.service';

@Controller('agents')
export class AgentsController {
    constructor(private agentsService: AgentsService) { }

    @Post()
    async createAgents() {
        return await this.agentsService.createAgents();
    }

    @Get()
    async getAllAgents() {
        return await this.agentsService.getAllAgents();
    }

    @Get('/:id')
    async getAgentById(@Param('id') Id: string) {
        return await this.agentsService.getAgentById(Id)
    }
}
