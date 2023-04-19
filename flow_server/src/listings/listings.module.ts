import { Module } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { ListingsController } from './listings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ListingsSchema } from './schema/listings-schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Listings',
      schema: ListingsSchema,
      collection: 'Listings'
    }])
  ],
  providers: [ListingsService],
  controllers: [ListingsController]
})
export class ListingsModule { }
