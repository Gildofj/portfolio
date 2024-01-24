import { ReactNode, createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import ptBrMessages from "../lang/pt-BR.json";
import enUsMessages from "../lang/en-US.json";

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
    if (window.localStorage && window.localStorage.getItem("locale"))
      return window.localStorage.getItem("locale") as LOCALE;

    return LOCALE.PT_BR;
  });

  const selectLocale = (value: LOCALE) => {
    window.localStorage.setItem("locale", value);
    setLocale(value);
  };

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
