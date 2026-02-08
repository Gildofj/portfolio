"use client";

import { useLocale, useTranslations } from "next-intl";
import { Overlay } from "@/components/_UI/Overlay";
import useUrlHash from "@/hooks/useUrlHash";
import { CodeIcon, GithubLogoIcon, ListIcon } from "@phosphor-icons/react";
import { NAVIGATIONS } from "@/shared/constants";
import { handleScrollWhenModalIsOpen } from "@/utils/scroll";
import { useScrollHandler } from "@/hooks/useScrollHandler";
import { Link, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Flag from "react-flagkit";

import { LocaleDropdownMenu } from "./LocaleDropdownMenu";
import { ToggleThemeButton } from "./ToggleTheme";

export function Header() {
  const t = useTranslations("header");
  const router = useRouter();
  const urlHash = useUrlHash();
  const locale = useLocale();
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { handleHeaderItemClick } = useScrollHandler(
    NAVIGATIONS.map((item) => item.href),
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [urlHash, locale]);

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, []);

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-20 w-full p-2 font-mono backdrop-blur-md transition-all duration-200">
      {open && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <nav className="relative z-30 flex h-[60px] items-center justify-between max-md:h-[46.2px]">
        <h2 className="font-mono text-lg font-semibold tracking-tight pt-[0.8rem] p-2">
          <Link
            href="/"
            title="Go to top of page"
            className="inline-flex items-center gap-1.5 no-underline text-zinc-900 dark:text-zinc-300"
          >
            <CodeIcon
              className="inline-flex items-center justify-center pb-[0.1rem] pr-[0.1rem] text-zinc-900 dark:text-zinc-300"
              height="1.8rem"
              width="1.8rem"
            />
            <div>
              gildofj<span className="text-primary">.dev</span>
            </div>
          </Link>
        </h2>
        <motion.ul
          className={`flex items-center justify-center gap-6 absolute left-1/2 -translate-x-1/2 transition-[visibility,opacity] duration-500 max-2xl:static max-2xl:translate-x-0 max-xl:gap-2 max-lg:absolute max-lg:w-full max-lg:h-screen max-lg:pb-[10%] max-lg:flex-col max-lg:text-lg max-lg:gap-2 max-lg:top-[60px] max-lg:left-0 max-lg:z-10 max-lg:rounded-b-xl ${open ? "max-lg:overflow-y-auto max-lg:visible max-lg:opacity-100" : "max-lg:overflow-hidden max-lg:invisible max-lg:opacity-0"} `}
          onClick={() => setOpen(false)}
        >
          <div className="hidden gap-4 max-lg:inline-flex">
            {routing.locales.map((locale) => {
              return (
                <button
                  key={locale}
                  type="button"
                  onClick={() => router.push("/", { locale })}
                  className="cursor-pointer"
                >
                  <Flag country={locale.split("-")[1]} />
                </button>
              );
            })}
          </div>
          {NAVIGATIONS.map(({ id, href, textId }) => (
            <motion.li key={id} className="relative cursor-pointer select-none">
              <Link
                href={href}
                onClick={() => handleHeaderItemClick(href)}
                title={textId}
                className={
                  "inline-block px-2 py-4 text-zinc-900 transition-[0.2s] hover:text-primary dark:text-zinc-300 max-xl:block max-xl:w-full max-xl:text-zinc-300 [&_span_svg]:text-zinc-900 [&_span_svg]:fill-zinc-900 dark:[&_span_svg]:text-zinc-300 dark:[&_span_svg]:fill-zinc-300 max-xl:[&_span_svg]:text-zinc-300 max-xl:[&_span_svg]:fill-zinc-300"
                }
              >
                {t(textId)}
              </Link>
              {isMounted && ((!urlHash && href === "#") || urlHash === href) ? (
                <motion.div
                  id="underline"
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                />
              ) : null}
            </motion.li>
          ))}
          <li>
            <Link
              href="https://github.com/Gildofj/portfolio/"
              title="Website source code"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-2 py-4 text-zinc-900 transition-[0.2s] hover:text-primary dark:text-zinc-300 max-xl:flex max-xl:w-full max-xl:text-zinc-300 [&_span_svg]:text-zinc-900 [&_span_svg]:fill-zinc-900 dark:[&_span_svg]:text-zinc-300 dark:[&_span_svg]:fill-zinc-300 max-xl:[&_span_svg]:text-zinc-300 max-xl:[&_span_svg]:fill-zinc-300"
            >
              <GithubLogoIcon size={16} />
              {t("source")}
            </Link>
          </li>
        </motion.ul>
        <div className="flex items-center gap-3 p-2 max-[1240px]:gap-1">
          <ToggleThemeButton />
          <LocaleDropdownMenu />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="hidden max-h-[38px] max-w-[38px] cursor-pointer rounded-md border border-zinc-700 bg-transparent p-2 shadow-[0_0_#0000,0_0_#0000,0_0_#0000,0_1px_2px_0_rgb(0_0_0/0.05)] outline-none transition-[0.2s] hover:bg-zinc-800 focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:shadow-[0_0_0_2px_#f3f4f6,0_0_0_calc(2px+2px)_rgb(99_102_241/1),0_1px_2px_0_rgb(0_0_0/0.05)] max-xl:inline-block"
            aria-label="Toggle menu"
          >
            <ListIcon size={20} className="text-zinc-900 dark:text-zinc-300" />
          </button>
        </div>
      </nav>
    </header>
  );
}
