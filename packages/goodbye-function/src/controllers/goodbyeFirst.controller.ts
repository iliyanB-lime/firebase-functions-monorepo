import { goodbyeService } from "../service/goodbye.service";
import * as express from "express";
import { logger, https } from "firebase-functions/v2";

export const goodbyeFirstController = (
  req: https.Request,
  res: express.Response
) => {
  goodbyeService("Goodbye First logs!");
  logger.info("Goodbye First logs!", { structuredData: true });
  return res.send("Goodbye from First Firebase!");
};
