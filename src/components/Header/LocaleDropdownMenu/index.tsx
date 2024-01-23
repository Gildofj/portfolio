import Flag from "react-flagkit";
import { useMemo } from "react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { FlagItem, FlagButton, MenuContent, MenuPortal } from "./styles";
import { useLocale, LOCALE } from "../../../contexts/LocaleContext";
import { useTheme } from "styled-components";

export function LocaleDropdownMenu() {
  const { locale, setLocale } = useLocale();
  const { theme } = useTheme();

  const selectedCountry = useMemo(() => locale.split("-")[1], [locale]);

  return (
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
  );
}
