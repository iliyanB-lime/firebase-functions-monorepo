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

// Function-specific config getters
export const getHelloConfig = (): HelloConfig => ({
  apiKey: process.env.API_KEY || "",
  environment: process.env.ENVIRONMENT || "",
  helloSpecificKey: process.env.HELLO_SPECIFIC_KEY || "",
});

export const getGoodbyeConfig = (): GoodbyeConfig => ({
  apiKey: process.env.API_KEY || "",
  environment: process.env.ENVIRONMENT || "",
  goodbyeSpecificKey: process.env.GOODBYE_SPECIFIC_KEY || "",
});
