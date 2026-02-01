import { Overlay } from "@components/_UI/Overlay";
import { LOCALE, useLocale } from "@contexts/LocaleContext";
import useUrlHash from "@hooks/useUrlHash";
import { GithubLogoIcon, ListIcon } from "@phosphor-icons/react";
import { NAVIGATIONS } from "@shared/constants";
import { handleScrollWhenModalIsOpen } from "@utils/scroll";
import { useEffect, useState } from "react";
import Flag from "react-flagkit";
import { useIntl } from "react-intl";
import { useTheme } from "styled-components";

import { LocaleDropdownMenu } from "./LocaleDropdownMenu";
import {
  Header as HeaderContainer,
  Link,
  LinkLogo,
  Logo,
  HeaderButton,
  HeaderActions,
  HeaderList,
  Nav,
  LogoIcon,
  LocaleList,
  FlagButtonNav,
  LinkUnderline,
  NavigationItem,
} from "./styles";
import { ToggleThemeButton } from "./ToggleTheme";

interface HeaderProps {
  handleHeaderItemClick: (id: string) => void;
}

export function Header({ handleHeaderItemClick }: HeaderProps) {
  const intl = useIntl();
  const urlHash = useUrlHash();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { locale, selectLocale } = useLocale();

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
    <HeaderContainer>
      {open && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <Nav>
        <Logo>
          <LinkLogo href="/portfolio/" title="Go to top of page">
            <LogoIcon
              color={theme.colors.text}
              height="1.8rem"
              width="1.8rem"
            />
            <div>
              gildofj<span>.dev</span>
            </div>
          </LinkLogo>
        </Logo>
        <HeaderList $open={open} onClick={() => setOpen(false)}>
          <LocaleList>
            {Object.keys(LOCALE).map(key => {
              const country = key.split("_")[1];
              let localeItem = LOCALE.PT_BR;
              if (key === "EN_US") localeItem = LOCALE.EN_US;

              return (
                <FlagButtonNav
                  key={key}
                  onClick={() => selectLocale(localeItem)}
                >
                  <Flag country={country} />
                </FlagButtonNav>
              );
            })}
          </LocaleList>
          {NAVIGATIONS.map(({ id, href, textId }) => (
            <NavigationItem key={id}>
              <Link
                key={id}
                href={href}
                $open={open}
                onClick={() => handleHeaderItemClick(href)}
                title={textId}
              >
                {intl.formatMessage({ id: textId })}
              </Link>
              {(!urlHash && href === "#") || urlHash === href ? (
                <LinkUnderline id="underline" layoutId="underline" />
              ) : null}
            </NavigationItem>
          ))}
          <li>
            <Link
              $open={open}
              $withIcon
              href="https://github.com/Gildofj/portfolio/"
              title="Website source code"
              target="_blank"
            >
              <GithubLogoIcon size={16} />
              {intl.formatMessage({ id: "header.source" })}
            </Link>
          </li>
        </HeaderList>
        <HeaderActions>
          <ToggleThemeButton />
          <LocaleDropdownMenu />
          <HeaderButton onClick={() => setOpen(!open)}>
            <ListIcon size={20} color={theme.colors.text} />
          </HeaderButton>
        </HeaderActions>
      </Nav>
    </HeaderContainer>
  );
}
