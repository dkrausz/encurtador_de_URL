import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

class BodyMiddleware {
  public bodyIsValid =
    (schema: ZodType) =>
    (req: Request, res: Response, next: NextFunction): void => {
      req.body = schema.parse(req.body);
      return next();
    };
}

export const bodyMiddleware = new BodyMiddleware();
