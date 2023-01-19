import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Container } from "./styles";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <About />
      </Container>
    </>
  )
}

export default App
