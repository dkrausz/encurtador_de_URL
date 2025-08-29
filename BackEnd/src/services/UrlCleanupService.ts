import { prisma } from "../database/prismaClient";
import { SandGridEmail } from "./emailService";

export class UrlCleanUpService {
  constructor(private emailService: SandGridEmail) {}

  public cleanOldUrls = async (days: number): Promise<void> => {
    const DAYS_AGO = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    const UrlsToDelete = await prisma.shortenURL.findMany({ where: { lastAccess: { lt: DAYS_AGO } } });
    for (const url of UrlsToDelete) {
      if (url.email) {
        await this.emailService.sendMail({
          to: url.email,
          subject: "Sua URL encurtada foi deletada",
          text: `A URL ${url.longUrl} foi deletada por inatividade.`,
        });
      }
    }

    await prisma.shortenURL.deleteMany({ where: { lastAccess: { lt: DAYS_AGO } } });
  };
}
