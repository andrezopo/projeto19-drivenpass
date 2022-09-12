declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      SECRET: string;
      SALT_ROUNDS: string;
    }
  }
}
export {};
