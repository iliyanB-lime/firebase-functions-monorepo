import * as functions from "firebase-functions";

// Base config interface
interface BaseConfig {
  apiKey: string;
  environment: string;
}

// Function-specific configs
export interface HelloConfig extends BaseConfig {
  helloSpecificKey: string;
}

export interface GoodbyeConfig extends BaseConfig {
  goodbyeSpecificKey: string;
}

// Generic config getter
const getConfig = <T extends BaseConfig>(
  configValidation: (config: any) => T
): T => {
  const config = functions.config();
  return configValidation(config);
};

// Function-specific config getters
export const getHelloConfig = () =>
  getConfig((config) => ({
    apiKey: config.common.api_key,
    environment: config.common.environment,
    helloSpecificKey: config.hello.specific_key,
  }));

export const getGoodbyeConfig = () =>
  getConfig((config) => ({
    apiKey: config.common.api_key,
    environment: config.common.environment,
    goodbyeSpecificKey: config.goodbye.specific_key,
  }));

// Validation helper
export const validateConfig = (
  config: Record<string, any>,
  requiredKeys: string[]
) => {
  for (const key of requiredKeys) {
    if (!config[key]) {
      throw new Error(`Missing required config: ${key}`);
    }
  }
};
