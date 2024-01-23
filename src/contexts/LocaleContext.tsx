import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IntlProvider } from "react-intl";
import ptBrMessages from "../lang/pt-BR.json";
import enUsMessages from "../lang/en-US.json";

export enum LOCALE {
  PT_BR = "pt-BR",
  EN_US = "en-US",
}

interface LocaleContextValue {
  locale: string;
  setLocale: (value: LOCALE) => void;
}

interface LocaleProviderProps {
  children: ReactNode;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "",
  setLocale: () => {},
});

const messages = {
  [LOCALE.PT_BR]: ptBrMessages,
  [LOCALE.EN_US]: enUsMessages,
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<LOCALE>(LOCALE.PT_BR);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
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
