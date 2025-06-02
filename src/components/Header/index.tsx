import { useEffect, useState } from "react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  List,
} from "@phosphor-icons/react";
import Flag from "react-flagkit";
import { useIntl } from "react-intl";

import useReactPath from "../../hooks/useReactPath";
import { handleScrollWhenModalIsOpen } from "../../utils/scroll";
import { Overlay } from "../_UI/Overlay";
import { SOCIALS, getNavigation } from "../constants";
import {
  Header as HeaderContainer,
  Link,
  LinkLogo,
  Logo,
  HeaderButton,
  HeaderSocial,
  SocialLink,
  HeaderList,
  Nav,
  LogoIcon,
  LocaleList,
  FlagButtonNav,
} from "./styles";
import { ToggleThemeButton } from "./ToggleTheme";
import { useTheme } from "../../contexts/ThemeContext";
import { LocaleDropdownMenu } from "./LocaleDropdownMenu";
import { LOCALE, useLocale } from "../../contexts/LocaleContext";

interface HeaderProps {
  handleHeaderItemClick: (id: string) => void;
}

export function Header({ handleHeaderItemClick }: HeaderProps) {
  const intl = useIntl();
  const urlPath = useReactPath();
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const { locale, selectLocale } = useLocale();

  useEffect(() => {
    setOpen(false);
  }, [urlPath, locale]);

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, []);

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, [open]);

  const getIcon = (id: string, color: string, size: number) => {
    switch (id) {
      case "github":
        return <GithubLogo color={color} size={size} />;
      case "linkedin":
        return <LinkedinLogo color={color} size={size} />;
      case "instagram":
        return <InstagramLogo color={color} size={size} />;
      case "twitter":
        return <XLogo color={color} size={size} />;
    }
  };

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
              color={theme !== "light" ? "#d4d4d8" : "#18181b"}
              height="1.8rem"
              width="1.8rem"
            />
            Gildo Junior
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
          {getNavigation(urlPath).map(({ id, href, textId, active }) => (
            <li key={id}>
              <Link
                $active={active}
                $open={open}
                onClick={() => handleHeaderItemClick(href)}
                href={href}
                data-to-scrollspy-id={href.replace("#", "")}
                title={textId}
              >
                {intl.formatMessage({ id: textId })}
              </Link>
            </li>
          ))}
          <li>
            <Link
              $active={false}
              $open={open}
              $withIcon
              href="https://github.com/Gildofj/portfolio/"
              title="Website source code"
              target="_blank"
            >
              <GithubLogo size={16} />
              {intl.formatMessage({ id: "header.source" })}
            </Link>
          </li>
        </HeaderList>
        <HeaderSocial>
          {SOCIALS.map((social, i) => (
            <SocialLink
              key={i}
              href={social.urlRedirect}
              title={`Go to my ${social.id}`}
              target="_blank"
              $hideOnSmall={
                social.id === "twitter" || social.id === "instagram"
              }
            >
              <span className="sr-only">{social.sr}</span>
              {getIcon(
                social.id,
                theme !== "light" ? "#d4d4d8" : "#18181b",
                32,
              )}
            </SocialLink>
          ))}
          <ToggleThemeButton />
          <LocaleDropdownMenu />
          <HeaderButton onClick={() => setOpen(!open)}>
            <List size={20} color={theme !== "light" ? "#d4d4d8" : "#18181b"} />
          </HeaderButton>
        </HeaderSocial>
      </Nav>
    </HeaderContainer>
  );
}
