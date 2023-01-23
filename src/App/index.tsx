import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Container } from "./styles";
import { Skills } from "../components/Skills";
import { Qualification } from "../components/Qualification";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <About />
        <Skills />
        <Qualification />
      </Container>
    </>
  )
}

export default App
