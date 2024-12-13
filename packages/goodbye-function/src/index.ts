import * as functions from "firebase-functions";
import { commonLogger } from "@my-project/shared";

const region = functions.region("us-central1");

export const goodbyeFunction = region.https.onRequest((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  switch (pathname) {
    case "/first":
      commonLogger("Goodbye logs!");
      functions.logger.info("Goodbye logs!", { structuredData: true });
      res.send("Goodbye from First Firebase!");
      break;

    case "/second":
      res.send("Goodbye from Second Firebase!");
      break;

    default:
      res.status(404).send("Not Found");
  }
});
