import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import AppProvider from "@/contexts";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    alternates: {
      canonical: `https://gildofj.dev/${lang}/`,
      languages: {
        "x-default": `https://gildofj.dev/${routing.defaultLocale}/`,
        ...Object.fromEntries(
          routing.locales.map((locale) => [
            locale,
            `https://dragonballdle.site/${locale}/`,
          ]),
        ),
      },
    },
  };
}

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
      <GoogleTagManager gtmId="GTM-KGTZKHVJ" />
      <GoogleAnalytics gaId="G-EN92JQKDMK" />
      <body>
        <SpeedInsights />
        <NextIntlClientProvider locale={lang}>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
