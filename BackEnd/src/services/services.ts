import { prisma } from "../database/prismaClient";
import { TCreateShortenUrl, TRedirectUrl, TReturnShortenUrl, TShortenUrl } from "../interfaces/shortenUrlInterface";
import { RedirectUrlSchema, ReturnShortenUrlSchema } from "../schema/shortenUrlSchema";

export class ShortenUrlService {
  public register = async (payload: TCreateShortenUrl): Promise<TReturnShortenUrl> => {
    const newDataToShort: TShortenUrl = {
      ...payload,

      shortUrl: this.generateShortUrl(),
    };
    const registeredShorten = await prisma.shortenURL.create({ data: newDataToShort });
    return ReturnShortenUrlSchema.parse(registeredShorten);
  };

  private generateShortUrl(length: number = 6): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  }

  public getRedirectUrl = async (shortUrl: string): Promise<string> => {
    const redirectUrl = await prisma.shortenURL.findUnique({ where: { shortUrl } });
    if (!redirectUrl) {
      throw new Error("erro");
    }
    const updatedAccess: TShortenUrl = {
      ...redirectUrl,
      lastAccess: new Date(),
      numberOfAccess: redirectUrl.numberOfAccess + 1,
    };

    await prisma.shortenURL.update({ where: { shortUrl }, data: updatedAccess });

    return redirectUrl.longUrl;
  };
}
