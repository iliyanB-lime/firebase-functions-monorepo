import { getGoodbyeConfig } from "../../../config/src";
import { commonLogger } from "../../../shared/src";

export const goodbyeService = (log: string) => {
  const config = getGoodbyeConfig();
  commonLogger(`Environment: ${config.environment}`);
  commonLogger(config.goodbyeSpecificKey);
  commonLogger(log);
};
