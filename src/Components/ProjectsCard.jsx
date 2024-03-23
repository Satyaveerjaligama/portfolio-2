import { Card, CardContent, Grid, Typography } from "@mui/material";
import "../Styles/ProjectsCard.css";

const ProjectsCard = () => {
  const projectDetails = [
    {
      title: "E-commerce",
      technologiesUsed: "React JS, JavaScript, Tailwind, Sass, Material UI, Redux Toolkit",
      description: "This E-commerce application has Login, Home, Product View, Cart and Account pages. User can navigate through these pages and can add the products to his cart."
    },
    {
      title: "Portfolio 1",
      technologiesUsed: "React JS, TypeScript, Next JS, Sass, Tailwind, Material UI",
      description: "It is a website with multiple pages like Home, Skills, Projects, Experience and Contact. One can navigate through this pages and check my work."
    },
    {
      title: "Todo App",
      technologiesUsed: "React JS, TypeScript, Vite JS, Sass, Redux-Toolkit, Material UI",
      description: "This app can be used to manage day to day tasks. It has 4 sections Dashboard, All tasks, Completed and Pending Tasks. User can create, modify and delete tasks based on his requirement."
    },
    {
      title: "Portfolio 2",
      technologiesUsed: "React JS, JavaScript, CSS, Material UI",
      description: "It is a single page website (with light and dark mode options). It displays the details about my skills, experience, education and social media links to get in touch with me."
    },
  ];

  return (
    <div id="Project" className="projects-main">
      <Typography variant="h6" className="font-young-serif text-decoration-underline">
        Projects
      </Typography>
      <Typography className="font-size-small font-signika-negative">(Only frontend is developed for the below projects)</Typography>
      <Grid className="projects-container" container rowSpacing={2} columnSpacing={2}>
        { projectDetails.map((project)=>
          <Grid item xs={12} sm={12}>
            <Card className="project-card">
              <CardContent className="project-info">
                <Typography>{project.title}</Typography>
                <Typography className="font-size-small">{`Developed using ${project.technologiesUsed}.`}</Typography>
                <Typography className="font-size-small">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ProjectsCard;
