import { HttpsOptions, onRequest } from "firebase-functions/v2/https";
import { goodbyeFirstController, goodbyeSecondController } from "./controllers";

enum GoodbyeFunctionPaths {
  FIRST = "/first",
  SECOND = "/second",
}

// This is to allow the function to be called by the public and not require authentication
const httpOptions: HttpsOptions = {
  region: "us-central1",
  invoker: "public",
};

// Split the implementation into two functions using controllers and services
export const goodbyeFunction = onRequest(httpOptions, (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  switch (pathname) {
    case GoodbyeFunctionPaths.FIRST:
      goodbyeFirstController(req, res as any);
      break;

    case GoodbyeFunctionPaths.SECOND:
      goodbyeSecondController(req, res as any);
      break;

    default:
      res.status(404).send("Not Found");
  }
});
