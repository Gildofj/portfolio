import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Container } from "./styles";
import { Skills } from "../components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <About />
        <Skills />
      </Container>
    </>
  )
}

export default App
