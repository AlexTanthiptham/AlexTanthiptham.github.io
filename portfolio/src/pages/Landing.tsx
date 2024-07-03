import "./Landing.css";
import { Box, Container } from "@mui/material";

import StyleWrapper from "../components/StyleWrapper";

import SectionAbout from "../components/SectionAbout";
import SectionContacts from "../components/SectionContacts";
import SectionExperience from "../components/SectionExperience";
import SectionProjects from "../components/SectionProjects";
import UtilsFooter from "../components/UtilsFooter";

const Landing = () => {
  return (
    <StyleWrapper>
      <Box
        id="landingWrapper"
        sx={{
          "& > *": {
            paddingBottom: 2,
          },
        }}
      >
        <SectionAbout />
        <SectionExperience />
        <SectionProjects />
        <SectionContacts />
        <UtilsFooter />
      </Box>
    </StyleWrapper>
  );
};

export default Landing;
