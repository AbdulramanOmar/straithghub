import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Project from "./components/Project";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import { FaWhatsapp } from "react-icons/fa";
const App = () => {
  return (
    <main className="relative">
      <a
        href="https://wa.me/+966537446068"
        className="fixed bottom-5 right-5 bg-green-500 text-white z-50 p-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={36} />
      </a>

      <Navbar />
      <Hero />
      <AboutUs />
      <WhyUs />
      <Project />
      <Partner />
      <Services />
     
      <Footer />
    </main>
  );
};

export default App;
