import { dirname } from "path";
import { createAppLog } from "share/pino-app-log";

export const packageDir = dirname(__dirname)

export const appConfig = {
  database: {
    url: "data/data.db"
  },
  thisServer: {
    port: 3000
  },
  log: {
    level: 'debug',
  }
} as const

export const appLog = createAppLog(appConfig.log);
