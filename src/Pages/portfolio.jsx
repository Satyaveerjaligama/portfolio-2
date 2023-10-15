import TopBar from "../Components/TopBar";
import ContactCard from "../Components/ContactCard";
import ExperienceCard from "../Components/ExperienceCard";
import Intro from "../Components/Intro";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import Footer from "../Components/Footer";

const Portfolio = () => {
  return (
    <>
      <TopBar />
      <Intro />
      <Skills />
      <ExperienceCard />
      <Education />
      <ContactCard />
      <Footer />
    </>
  );
};

export default Portfolio;
