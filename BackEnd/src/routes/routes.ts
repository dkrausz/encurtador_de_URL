import { Router } from "express";
import { ShortenController } from "../controller/shortenController";
import { bodyMiddleware } from "../middleware/body.middleware";
import { CreateshortenURLSchema } from "../schema/shortenUrlSchema";

export const shortenUrlRoute = Router();

const shortenURLController = new ShortenController();

shortenUrlRoute.post("/", bodyMiddleware.bodyIsValid(CreateshortenURLSchema), shortenURLController.register);
shortenUrlRoute.get("/:shortUrl", shortenURLController.redirectUrl);
shortenUrlRoute.get("/", shortenURLController.getAllUrls);
