import React from "react";
import "./Landing.css";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import StyleWrapper from "../components/StyleWrapper";

import SectionAbout from "../components/SectionAbout";
import SectionContacts from "../components/SectionContacts";
import SectionExperience from "../components/SectionExperience";
import SectionProjects from "../components/SectionProjects";
import UtilsFooter from "../components/UtilsFooter";

const Landing = () => {
  return (
    <StyleWrapper>
      <Container
        id="landing"
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
      </Container>
    </StyleWrapper>
  );
};

export default Landing;
