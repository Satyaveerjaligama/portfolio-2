import TopBar from "../Components/TopBar";
import ContactCard from "../Components/ContactCard";
import ExperienceCard from "../Components/ExperienceCard";
import Intro from "../Components/Intro";
import Skills from "../Components/Skills";
import Education from "../Components/Education";

const Portfolio = () => {
  return (
    <>
      <TopBar />
      <Intro />
      <Skills />
      <ExperienceCard />
      <Education />
      <ContactCard />
    </>
  );
};

export default Portfolio;
