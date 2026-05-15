"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePortfolioTheme } from "@/shared/lib/ThemeContext";
import { Overlay } from "@/shared/ui/Overlay";
import useUrlHash from "@/shared/hooks/useUrlHash";
import { ListIcon } from "@phosphor-icons/react";
import { NAVIGATIONS } from "@/shared/constants";
import { handleScrollWhenModalIsOpen } from "@/shared/utils/scroll";
import { useScrollHandler } from "@/shared/hooks/useScrollHandler";
import { Link } from "@/i18n/navigation";
import { m } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";

import { LocaleDropdownMenu } from "./LocaleDropdownMenu";
import { ToggleThemeButton } from "./ToggleTheme";
import { cn } from "@/shared/utils/cn";

const subscribe = () => () => {};

export function Header() {
  const t = useTranslations("header");
  const urlHash = useUrlHash();
  const locale = useLocale();
  const { theme } = usePortfolioTheme();
  const [open, setOpen] = useState(false);
  const [lastHash, setLastHash] = useState(urlHash);
  const [lastLocale, setLastLocale] = useState(locale);
  const { handleHeaderItemClick } = useScrollHandler(
    NAVIGATIONS.map((item) => item.href),
  );

  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (urlHash !== lastHash) setLastHash(urlHash);
  if (locale !== lastLocale) setLastLocale(locale);

  const isOpen = open && urlHash === lastHash && locale === lastLocale;

  useEffect(() => {
    handleScrollWhenModalIsOpen(isOpen);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-20 w-full px-6 font-mono transition-all duration-300">
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <nav className={cn(
        "mx-auto flex max-w-5xl items-center justify-between px-6 h-17.5 rounded-3xl transition-all duration-300",
        "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-neu-flat hover:shadow-neu-hover",
        "max-md:h-15 max-md:px-4"
      )}>
        <h2 className="font-mono text-lg font-bold tracking-tight">
          <Link
            href="/"
            title="Go to top of page"
            className="flex items-center gap-2 no-underline text-zinc-900 dark:text-zinc-100 group"
          >
            <m.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={
                  theme === "dark"
                    ? "/assets/logo-light.svg"
                    : "/assets/logo-dark.svg"
                }
                width={32}
                height={32}
                alt="Logo"
              />
            </m.div>
            <div className="flex items-baseline">
              gildofj<span className="text-primary font-black">.dev</span>
            </div>
          </Link>
        </h2>
        <m.ul
          className={cn(
            "flex items-center justify-center gap-2 absolute left-1/2 -translate-x-1/2",
            "transition-all duration-500 max-2xl:static max-2xl:translate-x-0",
            "max-xl:gap-1 max-lg:absolute max-lg:w-[calc(100%-3rem)] max-lg:h-fit max-lg:py-10 max-lg:flex-col max-lg:text-xl max-lg:gap-4 max-lg:top-22.5 max-lg:left-6 max-lg:z-10 max-lg:rounded-3xl max-lg:bg-white/95 dark:max-lg:bg-zinc-900/95 max-lg:shadow-neu-hover max-lg:backdrop-blur-2xl",
            open
              ? "max-lg:visible max-lg:opacity-100 max-lg:translate-y-0"
              : "max-lg:invisible max-lg:opacity-0 max-lg:-translate-y-4",
          )}
          onClick={() => setOpen(false)}
        >
          {NAVIGATIONS.map(({ id, href, textId }) => (
            <m.li key={id} className="relative cursor-pointer select-none">
              <Link
                href={href}
                onClick={() => handleHeaderItemClick(href)}
                title={textId}
                className={cn(
                  "relative z-10 inline-block px-4 py-2 rounded-xl text-zinc-600 dark:text-zinc-400 font-bold transition-all duration-300",
                  "hover:text-primary dark:hover:text-primary",
                  (isMounted && ((!urlHash && href === "#") || urlHash === href)) && "text-primary dark:text-primary"
                )}
              >
                {t(textId)}
                {isMounted && ((!urlHash && href === "#") || urlHash === href) ? (
                  <m.div
                    layoutId="header-pill"
                    className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            </m.li>
          ))}
        </m.ul>
        <div className="flex items-center gap-3 max-md:gap-2">
          <div className="flex items-center gap-1 rounded-2xl bg-zinc-100/50 dark:bg-zinc-800/50 p-1 shadow-neu-pressed">
            <ToggleThemeButton />
            <LocaleDropdownMenu />
          </div>
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className="hidden max-lg:flex items-center justify-center h-10 w-10 cursor-pointer rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-neu-flat hover:shadow-neu-hover active:shadow-neu-pressed transition-all duration-200"
            aria-label="Toggle menu"
          >
            <ListIcon size={24} className="text-zinc-900 dark:text-zinc-100" />
          </button>
        </div>
      </nav>
    </header>
  );
}
