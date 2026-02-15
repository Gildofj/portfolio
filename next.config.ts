import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["turbopack-inline-svg-loader"],
        condition: {
          content: /^[/s/S]{0,4000}$/,
        },
        as: "*.js",
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin();
export default withSentryConfig(withNextIntl(nextConfig), {
  org: "gildo-junior",
  project: "portfolio",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  webpack: {
    automaticVercelMonitors: true,
    treeshake: {
      removeDebugLogging: true,
    },
  },
});
