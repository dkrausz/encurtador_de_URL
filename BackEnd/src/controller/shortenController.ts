import { Request, Response } from "express";
import { ShortenUrlService } from "../services/services";
import { UrlCleanUpService } from "../services/UrlCleanupService";
import { SandGridEmail } from "../services/emailService";

export class ShortenController {
  private shortenService: ShortenUrlService;
  private urlCleanUpService: UrlCleanUpService;
  constructor() {
    this.shortenService = new ShortenUrlService();
    const emailService = new SandGridEmail();
    this.urlCleanUpService = new UrlCleanUpService(emailService);
  }

  public register = async (req: Request, res: Response): Promise<Response> => {
    const registerShortUrl = await this.shortenService.register(req.body);
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const completeshortUrl = `${baseUrl}/${registerShortUrl.shortUrl}`;
    const completeResponse = {
      longUrl: registerShortUrl.longUrl,
      shortUrl: completeshortUrl,
    };
    return res.status(201).json(completeResponse);
  };

  public redirectUrl = async (req: Request, res: Response): Promise<Response> => {
    const { shortUrl } = req.params;
    const retrivedShortUrl = await this.shortenService.getRedirectUrl(shortUrl);
    res.redirect(retrivedShortUrl);
    return res.status(200).json();
  };

  public cleanOldUrls = async (req: Request, res: Response): Promise<Response> => {
    await this.urlCleanUpService.cleanOldUrls(10);
    return res.status(204).json();
  };

  public getAllUrls = async (req: Request, res: Response): Promise<Response> => {
    const allUrls = await this.shortenService.getAllUrls();
    return res.status(200).json(allUrls);
  };
}
