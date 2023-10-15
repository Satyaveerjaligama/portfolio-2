import TopBar from "../Components/TopBar";
import ContactCard from "../Components/ContactCard";
import ExperienceCard from "../Components/ExperienceCard";
import Intro from "../Components/Intro";
import Skills from "../Components/Skills";

const Portfolio = () => {
  return (
    <>
      <TopBar />
      <Intro />
      <Skills />
      <ExperienceCard />
      <ContactCard />
    </>
  );
};

export default Portfolio;
