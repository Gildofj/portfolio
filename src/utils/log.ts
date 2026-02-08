type ConsoleType = typeof console;

export const devLogger = {
  log: (...args: Parameters<ConsoleType["log"]>) => {
    if (process.env.MODE === "development") {
      console.log(...args);
    }
  },
  warn: (...args: Parameters<ConsoleType["warn"]>) => {
    if (process.env.MODE === "development") {
      console.warn(...args);
    }
  },
  error: (...args: Parameters<ConsoleType["error"]>) => {
    if (process.env.MODE === "development") {
      console.error(...args);
    }
  },
  info: (...args: Parameters<ConsoleType["info"]>) => {
    if (process.env.MODE === "development") {
      console.info(...args);
    }
  },
  debug: (...args: Parameters<ConsoleType["debug"]>) => {
    if (process.env.MODE === "development") {
      console.debug(...args);
    }
  },
};
