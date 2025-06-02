import moment from "moment";
import { ToastContainer } from "react-toastify";

import { About } from "../components/About";
import { getNavigation } from "../components/constants";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Portfolio } from "../components/Portfolio";
import { Profile } from "../components/Profile";
import { Qualification } from "../components/Qualification";
import { Skills } from "../components/Skills";
import { Theme } from "../config/Theme";
import { LOCALE, useLocale } from "../contexts/LocaleContext";
import useReactPath from "../hooks/useReactPath";
import { useScrollSnapSpy } from "../hooks/useScrollSnapSpy";

import { Main, Content } from "./styles";

import "moment/dist/locale/pt-br";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { locale } = useLocale();
  const urlPath = useReactPath();
  const { handleHeaderItemClick } = useScrollSnapSpy(
    getNavigation(urlPath).map(item => item.href)
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
