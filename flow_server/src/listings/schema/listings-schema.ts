import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ListingsDocument = Listings & Document

@Schema()
class Unit {
    @Prop()
    bedrooms: number

    @Prop()
    bathrooms: number

    @Prop()
    parking: number

    @Prop()
    price: number
}




@Schema({ collection: 'Listings' })
export class Listings {
    @Prop()
    _id: string

    @Prop()
    agent: string

    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    status: string

    @Prop()
    organisation: string

    @Prop()
    listingType: string

    @Prop()
    listingSector: string

    @Prop({ type: Unit })
    unit: Unit

    @Prop([String])
    images: string[]

}

export const ListingsSchema = SchemaFactory.createForClass(Listings)
