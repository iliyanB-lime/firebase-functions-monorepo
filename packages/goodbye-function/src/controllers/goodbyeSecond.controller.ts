import { goodbyeService } from "../service/goodbye.service";
import * as express from "express";
import { logger, https } from "firebase-functions/v2";

export const goodbyeSecondController = (
  req: https.Request,
  res: express.Response
) => {
  goodbyeService("Goodbye Second logs!");
  logger.info("Goodbye Second logs!", { structuredData: true });
  return res.send("Goodbye from Second Firebase!");
};
