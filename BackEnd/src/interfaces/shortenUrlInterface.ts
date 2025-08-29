import { z } from "zod";
import { CreateshortenURLSchema, RedirectUrlSchema, ReturnShortenUrlSchema, shortenURLSchema } from "../schema/shortenUrlSchema";

type TShortenUrl = z.infer<typeof shortenURLSchema>;
type TCreateShortenUrl = z.infer<typeof CreateshortenURLSchema>;
type TReturnShortenUrl = z.infer<typeof ReturnShortenUrlSchema>;
type TRedirectUrl = z.infer<typeof RedirectUrlSchema>;

export { TShortenUrl, TCreateShortenUrl, TReturnShortenUrl, TRedirectUrl };
