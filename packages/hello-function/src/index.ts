import * as functions from "firebase-functions";
import { commonLogger } from "../../shared/src";

const region = functions.region("us-central1");

export const helloFunction = region.https.onRequest((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  switch (pathname) {
    case "/first":
      commonLogger("Hello logs!");
      functions.logger.info("Hello logs!", { structuredData: true });
      res.send("Hello from First Firebase!");
      break;

    case "/second":
      res.send("Hello from Second Firebase!");
      break;

    default:
      res.status(404).send("Not Found");
  }
});
