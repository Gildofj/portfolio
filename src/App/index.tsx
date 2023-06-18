import { useRef } from "react";
import moment from "moment";
import { ToastContainer } from "react-toastify";

import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Container, Main } from "./styles";
import { Skills } from "../components/Skills";
import { Qualification } from "../components/Qualification";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Portfolio } from "../components/Portfolio";

import 'react-toastify/dist/ReactToastify.css';
import "moment/dist/locale/pt-br";

function App() {
  moment.locale("pt-br")

  const scrollRef = useRef(null);

  return (
    <Container ref={scrollRef}>
      <Navbar />
      <Main>
        <About />
        <Skills scrollRef={scrollRef} />
        <Qualification scrollRef={scrollRef} />
        <Portfolio scrollRef={scrollRef} />
        <Contact scrollRef={scrollRef} />
      </Main>
      <Footer />
      <ToastContainer />
    </Container>
  )
}

export default App
