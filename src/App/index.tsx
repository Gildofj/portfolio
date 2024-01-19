import moment from "moment";
import ScrollSpy from "react-ui-scrollspy";

import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Portfolio } from "../components/Portfolio";
import { Qualification } from "../components/Qualification";
import { Skills } from "../components/Skills";
import { Profile } from "../components/Profile";
import { Main, Content } from "./styles";
import { useScrolling } from "../hooks/useScrolling";
import { ToastContainer } from "react-toastify";
import { Theme } from "../config/Theme";
import AppProvider from "../contexts";

import "moment/dist/locale/pt-br";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { scrollRef, handleHeaderItemClick, onUpdateCallback } = useScrolling();

  moment.locale("pt-br");
  return (
    <AppProvider>
      <Theme>
        <Header handleHeaderItemClick={handleHeaderItemClick} />
        <Main>
          <Content ref={scrollRef}>
            <ScrollSpy onUpdateCallback={onUpdateCallback}>
              <Profile />
              <About scrollRef={scrollRef} />
              <Skills scrollRef={scrollRef} />
              <Qualification scrollRef={scrollRef} />
              <Portfolio scrollRef={scrollRef} />
              <Contact scrollRef={scrollRef} />
            </ScrollSpy>
          </Content>
        </Main>
        <Footer />
        <ToastContainer />
      </Theme>
    </AppProvider>
  );
}

export default App;
