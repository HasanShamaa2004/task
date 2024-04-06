import { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";
import { OurProjects } from "../components/OurProjects";
import { Contact } from "../components/Contact";
import { OurFamily } from "../components/OurFamily";
import { Footer } from "../components/Footer";
export const HomePage = () => {
  return (
    <div className="bg-black h-[100vw] ">
      <Navbar />
      <Hero />
      <OurProjects />
      <Contact />
      <OurFamily />
      <Footer />
    </div>
  );
};
