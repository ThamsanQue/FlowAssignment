import { z } from "zod";

const listingSchema = z.object({
    _id: z.string(),
    title: z.string(),
    description: z.string(),
    images: z.string().array(),
    listingSector: z.string(),
    listingType: z.string(),
    unit: z.object({
        bathrooms: z.number(),
        bedrooms: z.number(),
        parking: z.number(),
        price: z.number(),
        _id: z.string(),
    }),
});

export type listingSchema = z.infer<typeof listingSchema>;