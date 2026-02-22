"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/components/_UI/Dropdown";
import { usePortfolioTheme } from "@/contexts/ThemeContext";
import { useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { AnimatePresence } from "motion/react";
import { useLocale } from "next-intl";
import { useMemo, useState, useSyncExternalStore } from "react";
import Flag from "react-flagkit";

const subscribe = () => () => {};

export function LocaleDropdownMenu() {
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { theme } = usePortfolioTheme();

  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const selectedCountry = useMemo(() => locale.split("-")[1], [locale]);

  return isMounted ? (
    <Dropdown open={open} onOpenChange={setOpen}>
      <DropdownTrigger asChild>
        <div className="inline-block h-10 w-10 cursor-pointer transition-all duration-500 max-[1200px]:hidden [&>img]:h-full [&>img]:w-full [&>img]:rounded-xl [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-300 [&>img]:ease-[ease]">
          <Flag country={selectedCountry} />
        </div>
      </DropdownTrigger>

      <AnimatePresence>
        {open && (
          <DropdownContent forceMountPortal>
            {routing.locales.map((locale) => {
              const country = locale.split("-")[1];
              return (
                <DropdownItem
                  asChild
                  key={locale}
                  onClick={() => router.push("/", { locale })}
                >
                  <button
                    type="button"
                    className={`block cursor-pointer rounded-md bg-transparent px-4 py-2 text-sm leading-5 ${theme !== "light" ? "hover:bg-zinc-700" : "hover:bg-purple-300"}`}
                  >
                    <Flag country={country} />
                  </button>
                </DropdownItem>
              );
            })}
          </DropdownContent>
        )}
      </AnimatePresence>
    </Dropdown>
  ) : (
    <div />
  );
}
