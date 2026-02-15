import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AppProvider from "@/contexts";

import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: [
    "Fira Mono",
    "SF Mono",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "Courier New",
    "monospace",
  ],
});

export const metadata: Metadata = {
  title: "Portfólio | Gildo Junior - Desenvolvedor Full-Stack",
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }

  setRequestLocale(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <GoogleAnalytics gaId="G-EN92JQKDMK" />
        <NextIntlClientProvider locale={lang}>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
