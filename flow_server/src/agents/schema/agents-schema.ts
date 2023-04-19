import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AgentsDocument = Agents & Document

@Schema({ collection: 'Agents' })
export class Agents {
    @Prop()
    _id: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    email: string;

    @Prop()
    contactNumber: string;

    @Prop()
    profileImageUrl: string;
}

export const AgentsSchema = SchemaFactory.createForClass(Agents)
