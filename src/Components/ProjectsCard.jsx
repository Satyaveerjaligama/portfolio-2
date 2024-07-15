import { Card, CardContent, Grid, Typography } from "@mui/material";
import "../Styles/ProjectsCard.css";

const ProjectsCard = () => {
  const projectDetails = [
    {
      title: "Health Plus",
      technologiesUsed: "Next JS, TypeScript, Redux Toolkit, Material UI",
      description: "This Health Plus product is used for creating a Health policy by providing all the details of the insurers, there medical conditions and other important information.",
      responsibilities: ["Developed dynamic and responsive UI", "Integration of REST APIs with frontend", "Data handling and API integration based on user interactions and inputs"]
    },
    {
      title: "Health Top-up",
      technologiesUsed: "React JS, JavaScript, Material UI",
      description: "Health Top-up is a product which provides the additional medical coverage to the customers.",
      responsibilities: ["Developed Share quote Functionality", "Changed the complete application from non responsive pages to responsive",  "Integration with the E-KYC service", "Cosmetic changes for whole application during the Rebranding"]
    },
    {
      title: "Endorsement",
      technologiesUsed: "React JS, JavaScript, Material UI",
      description: "This product is used by the operations team. If there is any change request from the customer regarding his policy information, operations team can modify and update through this application.",
      responsibilities: ["Couple of API integrations", "Developed responsive UI"]
    },
    {
      title: "Food Delivery App (MERN Stack)",
      technologiesUsed: "Next JS, TypeScript, Redux Toolkit, Material UI, Tailwind CSS, Node JS, Express JS, Mongo DB, REST APIs",
      description: "This application mainly have 3 users, Customer, Restaurant, Delivery agent. Right from ordering the food to the delivery step, everything will be processed through this application. It is not completely developed, currently WIP.",
      responsibilities: ["Developed different User interfaces for all the 3 users", "Development of REST APIs", "Integration of APIs with frontend", "Storing the data in DB"],
      gitLink: "https://github.com/Satyaveerjaligama/food-delivery-app-frontend"
    },
    {
      title: "E-commerce",
      technologiesUsed: "React JS, JavaScript, Tailwind, Sass, Material UI, Redux Toolkit",
      description: "This E-commerce application has Login, Home, Product View, Cart and Account pages. User can navigate through these pages and can add the products to his cart.",
      gitLink: "https://github.com/Satyaveerjaligama/e-commerce"
    },
    {
      title: "Portfolio 1",
      technologiesUsed: "React JS, TypeScript, Next JS, Sass, Tailwind, Material UI",
      description: "It is a website with multiple pages like Home, Skills, Projects, Experience and Contact. One can navigate through this pages and check my work.",
      gitLink: "https://github.com/Satyaveerjaligama/portfolio-1"
    },
    {
      title: "Todo App",
      technologiesUsed: "React JS, TypeScript, Vite JS, Sass, Redux-Toolkit, Material UI",
      description: "This app can be used to manage day to day tasks. It has 4 sections Dashboard, All tasks, Completed and Pending Tasks. User can create, modify and delete tasks based on his requirement.",
      gitLink: "https://github.com/Satyaveerjaligama/todo-app"
    },
    {
      title: "Portfolio 2",
      technologiesUsed: "React JS, JavaScript, CSS, Material UI",
      description: "It is a single page website (with light and dark mode options). It displays the details about my skills, experience, education and social media links to get in touch with me.",
      gitLink: "https://github.com/Satyaveerjaligama/portfolio-2"
    },
  ];

  return (
    <div id="Project" className="projects-main">
      <Typography variant="h6" className="font-young-serif text-decoration-underline">
        Projects
      </Typography>
      <Grid className="projects-container" container rowSpacing={2} columnSpacing={2}>
        { projectDetails.map((project)=>
          <Grid item xs={12} sm={12}>
            <Card className="project-card">
              <CardContent className="project-info">
                <Typography>{project.title}</Typography>
                <Typography className="font-size-small">{`Developed using ${project.technologiesUsed}.`}</Typography>
                <Typography className="font-size-small">{project.description}</Typography>
                { project.responsibilities &&
                <>
                  <Typography className="font-size-small" sx={{fontFamily: "Young Serif", marginTop: "5px"}}>Responsibilities</Typography>
                  <ul style={{marginTop: "0px", marginBottom: "0px"}}>
                    { project.responsibilities.map((responsibility) => 
                      <li className="font-signika-negative font-size-small">{responsibility}</li>
                    )}
                  </ul>
                </>
                }
                { project.gitLink &&
                  <Typography className="font-signika-negative font-size-small">Git Link :- 
                    <a href={project.gitLink} target="_blank" rel="noreferrer">{project.gitLink}</a>
                  </Typography>
                }
                { project.title === "Food Delivery App (MERN Stack)" &&
                  <Typography className="font-signika-negative font-size-small">Git Link :- 
                    <a href="https://github.com/Satyaveerjaligama/food-delivery-app-backend" target="_blank" rel="noreferrer">https://github.com/Satyaveerjaligama/food-delivery-app-backend</a>
                  </Typography>
                }
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ProjectsCard;
