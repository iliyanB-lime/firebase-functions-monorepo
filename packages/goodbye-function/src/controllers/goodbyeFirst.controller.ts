import * as functions from "firebase-functions";
import { goodbyeService } from "../service/goodbye.service";

export const goodbyeFirstController = (
  req: functions.https.Request,
  res: functions.Response
) => {
  goodbyeService("Goodbye First logs!");
  functions.logger.info("Goodbye First logs!", { structuredData: true });
  return res.send("Goodbye from First Firebase!");
};
