import { z } from "zod";

const shortenURLSchema = z.object({
  shortUrl: z.string().min(1),
  longUrl: z.string().min(1),
  email: z.string().nullable(),
  numberOfAccess: z.number().default(0),
  lastAccess: z.date().default(new Date()),
  createAt: z.date().default(new Date()),
});

const CreateshortenURLSchema = shortenURLSchema.omit({ shortUrl: true });
const ReturnShortenUrlSchema = shortenURLSchema.pick({ shortUrl: true, longUrl: true });
const RedirectUrlSchema = shortenURLSchema.pick({ longUrl: true });

export { shortenURLSchema, CreateshortenURLSchema, ReturnShortenUrlSchema, RedirectUrlSchema };
