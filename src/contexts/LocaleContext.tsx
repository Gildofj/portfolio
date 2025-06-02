import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IntlProvider } from "react-intl";

import enUsMessages from "../lang/en-US.json";
import ptBrMessages from "../lang/pt-BR.json";

export enum LOCALE {
  PT_BR = "pt-BR",
  EN_US = "en-US",
}

interface LocaleContextValue {
  locale: string;
  selectLocale: (value: LOCALE) => void;
}

interface LocaleProviderProps {
  children: ReactNode;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "",
  selectLocale: () => {},
});

const messages = {
  [LOCALE.PT_BR]: ptBrMessages,
  [LOCALE.EN_US]: enUsMessages,
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<LOCALE>(() => {
    if (window.localStorage && window.localStorage.getItem("locale")) {
      const currentLocale = window.localStorage.getItem("locale");

      if (currentLocale === LOCALE.PT_BR || currentLocale === LOCALE.EN_US)
        return currentLocale as LOCALE;

      if (currentLocale === "pt") return LOCALE.PT_BR;
      if (currentLocale === "en") return LOCALE.EN_US;
    }

    return LOCALE.PT_BR;
  });

  const selectLocale = (value: LOCALE) => {
    window.localStorage.setItem("locale", value);
    setLocale(value);
  };

  useEffect(() => {
    const htmlTag = document.documentElement;
    htmlTag.lang = locale == LOCALE.PT_BR ? "pt-BR" : "en";
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, selectLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale="pt-BR"
        messages={messages[locale]}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);

export default LocaleProvider;
