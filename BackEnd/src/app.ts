import express, { json } from "express";
import { shortenUrlRoute } from "./routes/routes";
import cron from "node-cron";
import { UrlCleanUpService } from "./services/UrlCleanupService";
import { SandGridEmail } from "./services/emailService";
export const app = express();

app.use(json());
app.use("/", shortenUrlRoute);

cron.schedule("0 3 * * *", async () => {
  console.log("Rodando limpeza diária às 3h da manhã");
  const emailService = new SandGridEmail();
  const urlCleanService = new UrlCleanUpService(emailService);
  await urlCleanService.cleanOldUrls(30);
});
