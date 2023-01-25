import { ToastContainer } from "react-toastify";

import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Container } from "./styles";
import { Skills } from "../components/Skills";
import { Qualification } from "../components/Qualification";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </Container>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
