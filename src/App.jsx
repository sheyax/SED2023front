import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Sed23 from "./components/Sed23";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Report from "./components/Report";

import HackathonForm from "./components/HackathonForm";

function App() {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal]= useState(true)


  return (
    <div className="snap-y snap-mandatory">
      <header id="header">
        <Header />
      </header>
      <main>
        <section className="snap-center">
        <Hero />
        </section>
        
        <Sed23 />
        {/* <Sponsors /> */}
        <About />
        <section className="snap-center">
        <Report/>
        </section>
        
        <Team />
        <Contact />
        {/* <HackathonForm open={openModal}/> */}
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
