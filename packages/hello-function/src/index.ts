import * as functions from "firebase-functions";
import { helloFirstController, helloSecondController } from "./controllers";

enum HelloFunctionPaths {
  FIRST = "/first",
  SECOND = "/second",
}

// This is to allow the function to be called by the public and not require authentication
const region = functions.region("us-central1").runWith({
  invoker: "public",
});

// Split the implementation into two functions using controllers and services
export const helloFunction = region.https.onRequest((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  switch (pathname) {
    case HelloFunctionPaths.FIRST:
      helloFirstController(req, res);
      break;

    case HelloFunctionPaths.SECOND:
      helloSecondController(req, res);
      break;

    default:
      res.status(404).send("Not Found");
  }
});
