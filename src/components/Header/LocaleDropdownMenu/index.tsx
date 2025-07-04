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

import { FlagButton, FlagItem } from "./styles";

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
        <FlagButton $currentTheme={theme}>
          <Flag country={selectedCountry} />
        </FlagButton>
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
                  <FlagItem>
                    <Flag country={country} />
                  </FlagItem>
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
