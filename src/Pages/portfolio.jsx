import TopBar from "../Components/TopBar";
import ContactCard from "../Components/ContactCard";
import ExperienceCard from "../Components/ExperienceCard";
import HeroComponent from "../Components/Intro";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import Footer from "../Components/Footer";
import Hobbies from "../Components/Hobbies";

const Portfolio = () => {
  return (
    <>
      <TopBar />
      <HeroComponent />
      <Skills />
      <ExperienceCard />
      <Education />
      <Hobbies />
      <ContactCard />
      <Footer />
    </>
  );
};

export default Portfolio;
