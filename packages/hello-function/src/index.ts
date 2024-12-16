import { helloFirstController, helloSecondController } from "./controllers";
import { HttpsOptions, onRequest } from "firebase-functions/v2/https";

enum HelloFunctionPaths {
  FIRST = "/first",
  SECOND = "/second",
}

// This is to allow the function to be called by the public and not require authentication
const httpOptions: HttpsOptions = {
  region: "us-central1",
  invoker: "public",
};

// Split the implementation into two functions using controllers and services
export const helloFunction = onRequest(httpOptions, (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  switch (pathname) {
    case HelloFunctionPaths.FIRST:
      helloFirstController(req, res as any);
      break;

    case HelloFunctionPaths.SECOND:
      helloSecondController(req, res as any);
      break;

    default:
      res.status(404).send("Not Found");
  }
});
