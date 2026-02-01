type ConsoleType = typeof console;

/* eslint-disable no-console */
export const devLogger = {
  log: (...args: Parameters<ConsoleType["log"]>) => {
    if (import.meta.env.MODE === "development") {
      console.log(...args);
    }
  },
  warn: (...args: Parameters<ConsoleType["warn"]>) => {
    if (import.meta.env.MODE === "development") {
      console.warn(...args);
    }
  },
  error: (...args: Parameters<ConsoleType["error"]>) => {
    if (import.meta.env.MODE === "development") {
      console.error(...args);
    }
  },
  info: (...args: Parameters<ConsoleType["info"]>) => {
    if (import.meta.env.MODE === "development") {
      console.info(...args);
    }
  },
  debug: (...args: Parameters<ConsoleType["debug"]>) => {
    if (import.meta.env.MODE === "development") {
      console.debug(...args);
    }
  },
};
