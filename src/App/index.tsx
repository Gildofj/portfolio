import moment from "moment";
import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
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

import "moment/dist/locale/pt-br";
import "react-toastify/dist/ReactToastify.css";

function App() {
  moment.locale("pt-br");

  const scrollRef = useRef(null);
  const isHeaderClickRef = useRef(false);

  const handleHeaderItemClick = () => {
    isHeaderClickRef.current = true;

    setTimeout(() => {
      isHeaderClickRef.current = false;
    }, 1000);
  };

  const onUpdateCallback = (id: string) => {
    if (isHeaderClickRef.current) {
      return;
    }

    window.location.href = `#${id}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) window.location.href = "#";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
