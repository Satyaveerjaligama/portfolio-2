import { Typography } from "@mui/material";
import "../Styles/Summary.css";

const Summary = () => {
  return (
    <div id="Education" className="summary-main">
      <Typography variant="h6" className="font-young-serif text-decoration-underline">
        Summary
      </Typography>
      <Typography className="font-size-small font-signika-negative">
        Looking for a developer position where I can put my application development expertise to work, 
        take on challenges, and grow from them. Ultimately resulting in both business and personal progress.
      </Typography>
    </div>
  );
};

export default Summary;
