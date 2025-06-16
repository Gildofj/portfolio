import emailjs from "@emailjs/browser";
import * as Sentry from "@sentry/react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AppProvider from "./contexts";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DNS,
  sendDefaultPii: true,
});

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
