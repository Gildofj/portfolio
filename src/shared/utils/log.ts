type ConsoleType = typeof console;

export const devLogger = {
  log: (...args: Parameters<ConsoleType["log"]>) => {
    if (process.env.NODE_ENV === "development") {
      console.log(...args);
    }
  },
  warn: (...args: Parameters<ConsoleType["warn"]>) => {
    if (process.env.NODE_ENV === "development") {
      console.warn(...args);
    }
  },
  error: (...args: Parameters<ConsoleType["error"]>) => {
    if (process.env.NODE_ENV === "development") {
      console.error(...args);
    }
  },
  info: (...args: Parameters<ConsoleType["info"]>) => {
    if (process.env.NODE_ENV === "development") {
      console.info(...args);
    }
  },
  debug: (...args: Parameters<ConsoleType["debug"]>) => {
    if (process.env.NODE_ENV === "development") {
      console.debug(...args);
    }
  },
};
