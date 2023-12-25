import moment from "moment";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";

import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Portfolio } from "../components/Portfolio";
import { Qualification } from "../components/Qualification";
import { Skills } from "../components/Skills";
import { Container, Main } from "./styles";

import "moment/dist/locale/pt-br";
import "react-toastify/dist/ReactToastify.css";
import { Profile } from "../components/Profile";

function App() {
  moment.locale("pt-br");

  const scrollRef = useRef(null);
  const isNavbarClickRef = useRef(false);

  const handleNavbarItemClick = () => {
    isNavbarClickRef.current = true;

    setTimeout(() => {
      isNavbarClickRef.current = false;
    }, 1000);
  };

  const onUpdateCallback = (id: string) => {
    if (isNavbarClickRef.current) {
      return;
    }

    window.location.href = `#${id}`;
  };

  return (
    <Container ref={scrollRef}>
      <Navbar handleNavbarItemClick={handleNavbarItemClick} />
      <Main onUpdateCallback={onUpdateCallback}>
        <Profile />
        <About scrollRef={scrollRef} />
        <Skills scrollRef={scrollRef} />
        <Qualification scrollRef={scrollRef} />
        <Portfolio scrollRef={scrollRef} />
        <Contact scrollRef={scrollRef} />
      </Main>
      <Footer />
      <ToastContainer />
    </Container>
  );
}

export default App;
