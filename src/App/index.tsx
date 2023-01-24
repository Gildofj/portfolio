import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Container } from "./styles";
import { Skills } from "../components/Skills";
import { Qualification } from "../components/Qualification";
import { Contact } from "../components/Contact";

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
    </>
  )
}

export default App
