import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Theme } from "@config/Theme";
import { LOCALE, useLocale } from "@contexts/LocaleContext";
import { useScrollHandler } from "@hooks/useScrollHandler";
import { About } from "@sections/About";
import { Contact } from "@sections/Contact";
import { Portfolio } from "@sections/Portfolio";
import { Profile } from "@sections/Profile";
import { Qualification } from "@sections/Qualification";
import { Skills } from "@sections/Skills";
import { NAVIGATIONS } from "@shared/constants";
import moment from "moment";
import { ToastContainer } from "react-toastify";

import { Main, Content } from "./styles";

import "moment/dist/locale/pt-br";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { locale } = useLocale();
  const { handleHeaderItemClick } = useScrollHandler(
    NAVIGATIONS.map(item => item.href)
  );

  moment.locale(locale === LOCALE.EN_US ? "en-us" : "pt-br");

  return (
    <Theme>
      <Header handleHeaderItemClick={handleHeaderItemClick} />
      <Main>
        <Content>
          <Profile />
          <About />
          <Skills />
          <Qualification />
          <Portfolio />
          <Contact />
        </Content>
      </Main>
      <Footer />
      <ToastContainer />
    </Theme>
  );
}

export default App;
