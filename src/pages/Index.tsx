import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import  Awards  from "@/components/sections/Awards";

const Index = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Achievements />
        <Certifications />
        <Projects />
        <Awards />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
