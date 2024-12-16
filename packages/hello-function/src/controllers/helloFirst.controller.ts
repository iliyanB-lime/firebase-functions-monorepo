import { helloService } from "../service/hello.service";
import * as express from "express";
import { logger, https } from "firebase-functions/v2";

export const helloFirstController = (
  req: https.Request,
  res: express.Response
) => {
  helloService("Hello First logs!");
  logger.info("Hello First logs!", { structuredData: true });
  return res.send("Hello from First Firebase!");
};
