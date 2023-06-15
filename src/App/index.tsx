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

  return (
    <Container>
      <Navbar />
      <Main>
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </Main>
      <Footer />
      <ToastContainer />
    </Container>
  )
}

export default App
