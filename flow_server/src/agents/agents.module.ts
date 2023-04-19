import { Module } from '@nestjs/common';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentsSchema } from './schema/agents-schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Agents',
      schema: AgentsSchema,
      collection: 'Agents'
    }])
  ],
  controllers: [AgentsController],
  providers: [AgentsService]
})
export class AgentsModule { }
