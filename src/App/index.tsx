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
import 'react-toastify/dist/ReactToastify.css';

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
