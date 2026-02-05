import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@components/_UI/Dropdown";
import { useLocale, LOCALE } from "@contexts/LocaleContext";
import { usePortfolioTheme } from "@contexts/ThemeContext";
import { AnimatePresence } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import Flag from "react-flagkit";

export function LocaleDropdownMenu() {
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale, selectLocale } = useLocale();
  const { theme } = usePortfolioTheme();

  const selectedCountry = useMemo(() => locale.split("-")[1], [locale]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
            {Object.keys(LOCALE).map(key => {
              const country = key.split("_")[1];
              let localeItem = LOCALE.PT_BR;
              if (key === "EN_US") localeItem = LOCALE.EN_US;

              return (
                <DropdownItem
                  asChild
                  key={key}
                  onClick={() => selectLocale(localeItem)}
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
