import { z } from "zod";

export const formSchema = z.object({
  longUrl: z.string().url("URL inválida"),
  email: z.email("E-mail inválido").or(z.literal("")).optional(),
});

export type Tform = z.infer<typeof formSchema>;
