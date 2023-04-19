import { z } from "zod";

const AgentSchema = z.object({
    _id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    profileImageUrl: z.string().url(),
});

export type AgentSchema = z.infer<typeof AgentSchema>;
