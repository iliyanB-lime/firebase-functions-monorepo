import { commonLogger } from "../../../shared/src";
import { getHelloConfig } from "../../../config/src";

export const helloService = (log: string) => {
  const config = getHelloConfig();
  commonLogger(`Environment: ${config.environment}`);
  commonLogger(config.helloSpecificKey);
  commonLogger(log);
};
