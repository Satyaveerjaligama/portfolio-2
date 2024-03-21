import { Card, CardContent, Grid, Typography } from "@mui/material";
import "../Styles/ProjectsCard.css";

const ProjectsCard = () => {
  return (
    <div id="Project" className="projects-main">
      <Typography variant="h6" className="font-young-serif">
        Projects
      </Typography>
      <Grid className="projects-container" container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="project-card">
            <CardContent className="project-info">
              <Typography>E-commerce</Typography>
              <Typography className="font-size-small">Developed using React JS, JavaScript, Tailwind, Sass, Material UI, Redux Toolkit.</Typography>
              <Typography className="font-size-small">
                This E-commerce application has Login, Home, Product View, Cart and Account pages. User can navigate through the available pages
                and can add the products to the cart
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card className="project-card">
            <CardContent className="project-info">
              <Typography>Portfolio 1</Typography>
              <Typography className="font-size-small">Developed using React JS, TypeScript, Next JS, Sass, Tailwind, Material UI.</Typography>
              <Typography className="font-size-small">
                It is a website with Multiple pages like Home, Skills, Projects, Experience and Contact. One can navigate through this pages and check
                my work.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card className="project-card">
            <CardContent className="project-info">
              <Typography>Todo App</Typography>
              <Typography className="font-size-small">Developed using React JS, TypeScript, Vite JS, Sass, Redux-Toolkit, Material UI.</Typography>
              <Typography className="font-size-small">
                This app can be used to manage day to day tasks. It has 3 sections Dashboard, Completed and Pending Tasks. User can create, modify
                and delete tasks based on his convenience
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card className="project-card">
            <CardContent className="project-info">
              <Typography>Portfolio 2</Typography>
              <Typography className="font-size-small">Developed using React JS, JavaScript, CSS, Material UI.</Typography>
              <Typography className="font-size-small">
                It is a single page website (with light and dark mode options). It has the details about my skills, experience, education and social 
                media links to connect with me.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsCard;
