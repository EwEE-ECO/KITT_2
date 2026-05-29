import { CanvasBG } from "./components/CanvasBG";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Specialties } from "./components/Specialties";
import { Calculator } from "./components/Calculator";
import { Students } from "./components/Students";
import { Admissions } from "./components/Admissions";
import { Contacts } from "./components/Contacts";
import { Svedeniya } from "./components/Svedeniya";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";

function App() {
  return (
    <>
      <CanvasBG />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Calculator />
        <Students />
        <Admissions />
        <Contacts />
        <Svedeniya />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default App;
