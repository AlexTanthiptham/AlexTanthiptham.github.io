import "./Landing.css";
import { Box } from "@mui/material";

import SectionAbout from "../components/SectionAbout";
import SectionContacts from "../components/SectionContacts";
import SectionExperience from "../components/SectionExperience";
import SectionProjects from "../components/SectionProjects";
import UtilsFooter from "../components/UtilsFooter";

// Entry point for landing page.
// Store any CSS to be applied to all sections (e.g. standard margins/padding) here.

// NOTE: StyleWrapper be within the top-level element of each component
//       to ensure that the CSS applied to child sections is scoped correctly.

const Landing = () => {
  return (
    <Box
      id="landingWrapper"
      sx={{
        "& > *": {
          py: "5vh",
        },
      }}
    >
      <SectionAbout />
      <SectionExperience />
      <SectionProjects />
      <SectionContacts />
      <UtilsFooter />
    </Box>
  );
};

export default Landing;
