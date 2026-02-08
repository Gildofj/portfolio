import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Portfolio } from "@/sections/Portfolio";
import { Profile } from "@/sections/Profile";
import { Qualification } from "@/sections/Qualification";
import { Skills } from "@/sections/Skills";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full max-[700px]:pt-[50px]">
        <article className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-8">
          <Profile />
          <About />
          <Skills />
          <Qualification />
          <Portfolio />
          <Contact />
        </article>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
