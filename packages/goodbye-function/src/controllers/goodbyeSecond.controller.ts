import * as functions from "firebase-functions";
import { goodbyeService } from "../service/goodbye.service";

export const goodbyeSecondController = (
  req: functions.https.Request,
  res: functions.Response
) => {
  goodbyeService("Goodbye Second logs!");
  functions.logger.info("Goodbye Second logs!", { structuredData: true });
  return res.send("Goodbye from Second Firebase!");
};
