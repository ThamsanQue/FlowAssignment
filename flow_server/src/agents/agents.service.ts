import { Injectable } from '@nestjs/common';
import { Agents, AgentsDocument } from './schema/agents-schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as AgentsData from '../data/agents.json'

@Injectable()
export class AgentsService {
    constructor(@InjectModel(Agents.name) private AgentsModel: Model<AgentsDocument>) { }


    async createAgents() {
        return await this.AgentsModel.insertMany(AgentsData)
    }

    async getAllAgents() {
        return await this.AgentsModel.find().exec();
    }

    async getAgentById(Id: string) {
        return await this.AgentsModel.findById(Id).exec();
    }
}
