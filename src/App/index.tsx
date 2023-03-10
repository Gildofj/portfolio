import { ToastContainer } from "react-toastify";

import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Container, Main } from "./styles";
import { Skills } from "../components/Skills";
import { Qualification } from "../components/Qualification";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Container>
      <Navbar />
      <Main>
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </Main>
      <Footer />
      <ToastContainer />
    </Container>
  )
}

export default App
