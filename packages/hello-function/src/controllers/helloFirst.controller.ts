import * as functions from "firebase-functions";
import { helloService } from "../service/hello.service";

export const helloFirstController = (
  req: functions.https.Request,
  res: functions.Response
) => {
  helloService("Hello First logs!");
  functions.logger.info("Hello First logs!", { structuredData: true });
  return res.send("Hello from First Firebase!");
};
