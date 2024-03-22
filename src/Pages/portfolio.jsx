import ContactCard from "../Components/ContactCard";
import ExperienceCard from "../Components/ExperienceCard";
import HeroComponent from "../Components/Intro";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import ProjectsCard from "../Components/ProjectsCard";
import Summary from "../Components/Summary";

const Portfolio = () => {
  return (
    <>
      <HeroComponent />
      <Summary />
      <Skills />
      <ExperienceCard />
      <ProjectsCard />
      <Education />
      <ContactCard />
    </>
  );
};

export default Portfolio;
