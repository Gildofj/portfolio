import Flag from "react-flagkit";
import { useEffect, useMemo, useState } from "react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { FlagItem, FlagButton, MenuContent, MenuPortal } from "./styles";
import { useLocale, LOCALE } from "../../../contexts/LocaleContext";
import { useTheme } from "../../../contexts/ThemeContext";

export function LocaleDropdownMenu() {
  const [isMounted, setIsMounted] = useState(false);
  const { locale, setLocale } = useLocale();
  const { theme } = useTheme();

  const selectedCountry = useMemo(() => locale.split("-")[1], [locale]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <Menu.Root>
      <Menu.Trigger asChild>
        <FlagButton $currentTheme={theme}>
          <Flag country={selectedCountry} />
        </FlagButton>
      </Menu.Trigger>

      <MenuPortal>
        <MenuContent $currentTheme={theme}>
          {Object.keys(LOCALE).map(key => {
            const country = key.split("_")[1];
            let localeItem = LOCALE.PT_BR;
            if (key === "EN_US") localeItem = LOCALE.EN_US;

            return (
              <Menu.Item asChild key={key}>
                <FlagItem
                  $currentTheme={theme}
                  onClick={() => setLocale(localeItem)}
                >
                  <Flag country={country} />
                </FlagItem>
              </Menu.Item>
            );
          })}
        </MenuContent>
      </MenuPortal>
    </Menu.Root>
  ) : (
    <div />
  );
}
