import * as functions from "firebase-functions";
import { goodbyeFirstController, goodbyeSecondController } from "./controllers";

enum GoodbyeFunctionPaths {
  FIRST = "/first",
  SECOND = "/second",
}

// This is to allow the function to be called by the public and not require authentication
const region = functions.region("us-central1").runWith({
  invoker: "public",
});

// Split the implementation into two functions using controllers and services
export const goodbyeFunction = region.https.onRequest((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  switch (pathname) {
    case GoodbyeFunctionPaths.FIRST:
      goodbyeFirstController(req, res);
      break;

    case GoodbyeFunctionPaths.SECOND:
      goodbyeSecondController(req, res);
      break;

    default:
      res.status(404).send("Not Found");
  }
});
