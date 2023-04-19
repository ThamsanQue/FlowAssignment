import { Injectable } from '@nestjs/common';
import { Listings, ListingsDocument } from './schema/listings-schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as ListingsData from '../data/listings.json'

@Injectable()
export class ListingsService {
    constructor(@InjectModel(Listings.name) private ListingsModel: Model<ListingsDocument>) { }

    async createListings() {
        return await this.ListingsModel.insertMany(ListingsData)
    }

    async getListingsByAgentId(agentId: string) {
        return await this.ListingsModel.find({ 'agent': agentId }).exec();
    }

    async getListingsById(id: string) {
        return await this.ListingsModel.findById(id).exec();
    }
}
