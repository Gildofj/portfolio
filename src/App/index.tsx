import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { LOCALE, useLocale } from "@contexts/LocaleContext";
import { useScrollHandler } from "@hooks/useScrollHandler";
import { About } from "@sections/About";
import { Contact } from "@sections/Contact";
import { Portfolio } from "@sections/Portfolio";
import { Profile } from "@sections/Profile";
import { Qualification } from "@sections/Qualification";
import { Skills } from "@sections/Skills";
import { NAVIGATIONS } from "@shared/constants";
import moment from "moment";
import { ToastContainer } from "react-toastify";

import "moment/dist/locale/pt-br";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { locale } = useLocale();
  const { handleHeaderItemClick } = useScrollHandler(
    NAVIGATIONS.map(item => item.href)
  );

  moment.locale(locale === LOCALE.EN_US ? "en-us" : "pt-br");

  return (
    <>
      <Header handleHeaderItemClick={handleHeaderItemClick} />
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

export default App;
