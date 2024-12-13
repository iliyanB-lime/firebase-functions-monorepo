import * as functions from "firebase-functions";
import { helloService } from "../service/hello.service";

export const helloSecondController = (
  req: functions.https.Request,
  res: functions.Response
) => {
  helloService("Hello Second logs!");
  functions.logger.info("Hello Second logs!", { structuredData: true });
  return res.send("Hello from Second Firebase!");
};
