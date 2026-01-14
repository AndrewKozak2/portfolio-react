import { Hero } from "../components/Hero/Hero";
import { ProjectsSection } from "../components/ProjectsSection/ProjectsSection";
import { Skills } from "../components/Skills/Skills";
import { Contact } from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectsSection />
      <Contact />
    </>
  );
};

export default Home;
