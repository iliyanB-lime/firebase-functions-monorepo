import { helloService } from "../service/hello.service";
import * as express from "express";
import { logger, https } from "firebase-functions/v2";

export const helloSecondController = (
  req: https.Request,
  res: express.Response
) => {
  helloService("Hello Second logs!");
  logger.info("Hello Second logs!", { structuredData: true });
  return res.send("Hello from Second Firebase!");
};
